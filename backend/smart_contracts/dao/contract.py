from beaker import *
from beaker.lib.storage import BoxMapping, BoxList
from beaker.consts import (
    ASSET_MIN_BALANCE,
    BOX_BYTE_MIN_BALANCE,
    BOX_FLAT_MIN_BALANCE,
    FALSE,
)
from pyteal import *

SECONDS_PER_DAY = Int(86400)
WAKANDA_NFT_ASSET_ID = Int(591099355)


class Proposal(abi.NamedTuple):
    name: abi.Field[abi.String]
    description: abi.Field[abi.String]
    is_open: abi.Field[abi.Bool]
    end_time: abi.Field[abi.Uint64]
    yes_count: abi.Field[abi.Uint64]
    no_count: abi.Field[abi.Uint64]


class AppState:
    proposals = BoxMapping(abi.String, Proposal)
    membership_token = GlobalStateValue(
        TealType.uint64,
        static=True,
        descr="The asset that represents membership in the DAO",
    )

    def __init__(self, *, max_members: int):
        # Math for determining min balance based on expected size of boxes
        self.minimum_balance = Int(
            ASSET_MIN_BALANCE  # Cover min bal for member token
            + (BOX_FLAT_MIN_BALANCE + (abi.size_of(abi.Address) * BOX_BYTE_MIN_BALANCE))
            * max_members  # cover min bal for member record boxes we might create
        )
        self.membership_token = Int(591099355);


app = Application("proposals", state=AppState(max_members=2000)).apply(
    unconditional_create_approval, initialize_global_state=True
)


@app.external(authorize=Authorize.holds_token(app.state.membership_token))
def add_proposal(
    name: abi.String, description: abi.String, end_time: abi.Uint64,
    membership_token: abi.Asset = app.state.membership_token,
) -> Expr:
    is_open = abi.Bool()
    proposal_obj = Proposal()
    yes_count = abi.Uint64()
    no_count = abi.Uint64()
    return Seq(
        is_open.set(Int(1)),
        yes_count.set(Int(0)),
        no_count.set(Int(0)),
        proposal_obj.set(name, description, is_open, end_time, yes_count, no_count),
        app.state.proposals[name.get()].set(proposal_obj),
    )


@app.external
def read_proposal(name: abi.String, *, output: Proposal) -> Expr:
    return app.state.proposals[name.get()].store_into(output)


@app.external(authorize=Authorize.holds_token(app.state.membership_token))
def vote_yes(proposal_name: abi.String, membership_token: abi.Asset = app.state.membership_token,) -> Expr:
    yes = abi.Uint64()

    return Seq(
        (proposal := Proposal()).decode(app.state.proposals[proposal_name.get()].get()),
        (proposal.yes_count.store_into(yes)),
        (yes_count := abi.Uint64()).set(yes.get() + Int(1)),
        (no_count := abi.Uint64()).set(proposal.no_count),
        (description := abi.String()).set(proposal.description),
        (is_open := abi.Bool()).set(proposal.is_open),
        (end_time := abi.Uint64()).set(proposal.end_time),
        proposal.set(
            proposal_name, description, is_open, end_time, yes_count, no_count
        ),
        app.state.proposals[proposal_name.get()].set(proposal),
    )


@app.external(authorize=Authorize.holds_token(app.state.membership_token))
def vote_no(
    proposal_name: abi.String,
    membership_token: abi.Asset = app.state.membership_token,
) -> Expr:
    no = abi.Uint64()

    return Seq(
        (proposal := Proposal()).decode(app.state.proposals[proposal_name.get()].get()),
        (proposal.no_count.store_into(no)),
        (no_count := abi.Uint64()).set(no.get() + Int(1)),
        (yes_count := abi.Uint64()).set(proposal.yes_count),
        (description := abi.String()).set(proposal.description),
        (is_open := abi.Bool()).set(proposal.is_open),
        (end_time := abi.Uint64()).set(proposal.end_time),
        proposal.set(
            proposal_name, description, is_open, end_time, yes_count, no_count
        ),
        app.state.proposals[proposal_name.get()].set(proposal),
    )


@app.external(authorize=Authorize.holds_token(app.state.membership_token))
def delete_proposal(proposal_name: abi.String, membership_token: abi.Asset = app.state.membership_token,) -> Expr:
    return Pop(app.state.proposals[proposal_name.get()].delete())


@app.external(authorize=Authorize.only_creator())
def generate_membership_token(
    seed: abi.PaymentTransaction,
    token_name: abi.String,
    *,
    output: abi.Uint64,
) -> Expr:
    """create membership token and receive initial seed payment"""
    return Seq(
        Assert(
            seed.get().receiver() == Global.current_application_address(),
            comment="payment must be to app address",
        ),
        Assert(
            seed.get().amount() >= app.state.minimum_balance,
            comment=f"payment must be for >= {app.state.minimum_balance.value}",
        ),
        InnerTxnBuilder.Execute(
            {
                TxnField.type_enum: TxnType.AssetConfig,
                TxnField.config_asset_name: token_name.get(),
                TxnField.config_asset_total: Int(2000),
                TxnField.config_asset_default_frozen: Int(1),
                TxnField.config_asset_manager: Global.current_application_address(),
                TxnField.config_asset_clawback: Global.current_application_address(),
                TxnField.config_asset_freeze: Global.current_application_address(),
                TxnField.config_asset_reserve: Global.current_application_address(),
                TxnField.fee: Int(0),
            }
        ),
    )
