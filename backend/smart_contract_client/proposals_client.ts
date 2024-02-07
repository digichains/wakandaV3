import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class Proposal {
    name: string = "";
    description: string = "";
    is_open: boolean = false;
    end_time: bigint = BigInt(0);
    yes_count: bigint = BigInt(0);
    no_count: bigint = BigInt(0);
    static codec: algosdk.ABIType = algosdk.ABIType.from("(string,string,bool,uint64,uint64,uint64)");
    static fields: string[] = ["name", "description", "is_open", "end_time", "yes_count", "no_count"];
    static decodeResult(val: algosdk.ABIValue | undefined): Proposal {
        return bkr.decodeNamedTuple(val, Proposal.fields) as Proposal;
    }
    static decodeBytes(val: Uint8Array): Proposal {
        return bkr.decodeNamedTuple(Proposal.codec.decode(val), Proposal.fields) as Proposal;
    }
}
export class proposals extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: {}, reserved: {} };
    override acctSchema: bkr.Schema = { declared: {}, reserved: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMSA1OTEwOTkzNTUgMjkgNjU1MzYKYnl0ZWNibG9jayAweCAweDAwCnR4biBOdW1BcHBBcmdzCmludGNfMCAvLyAwCj09CmJueiBtYWluX2wxMgp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDdjZTEyYzAyIC8vICJhZGRfcHJvcG9zYWwoc3RyaW5nLHN0cmluZyx1aW50NjQpdm9pZCIKPT0KYm56IG1haW5fbDExCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4ZDc3OGFkMjUgLy8gInJlYWRfcHJvcG9zYWwoc3RyaW5nKShzdHJpbmcsc3RyaW5nLGJvb2wsdWludDY0LHVpbnQ2NCx1aW50NjQpIgo9PQpibnogbWFpbl9sMTAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHg0NGQwNzM5NSAvLyAidm90ZV95ZXMoc3RyaW5nKXZvaWQiCj09CmJueiBtYWluX2w5CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4MGUxODcwMzQgLy8gInZvdGVfbm8oc3RyaW5nKXZvaWQiCj09CmJueiBtYWluX2w4CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4ODljYjhhOWEgLy8gImRlbGV0ZV9wcm9wb3NhbChzdHJpbmcpdm9pZCIKPT0KYm56IG1haW5fbDcKZXJyCm1haW5fbDc6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgZGVsZXRlcHJvcG9zYWxjYXN0ZXJfMTAKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDg6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgdm90ZW5vY2FzdGVyXzkKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDk6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgdm90ZXllc2Nhc3Rlcl84CmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMDoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiByZWFkcHJvcG9zYWxjYXN0ZXJfNwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTE6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgYWRkcHJvcG9zYWxjYXN0ZXJfNgppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTI6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KYm56IG1haW5fbDE0CmVycgptYWluX2wxNDoKdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKPT0KYXNzZXJ0CmNhbGxzdWIgY3JlYXRlXzAKaW50Y18xIC8vIDEKcmV0dXJuCgovLyBjcmVhdGUKY3JlYXRlXzA6CnByb3RvIDAgMApyZXRzdWIKCi8vIGFkZF9wcm9wb3NhbAphZGRwcm9wb3NhbF8xOgpwcm90byAzIDAKaW50Y18wIC8vIDAKYnl0ZWNfMCAvLyAiIgppbnRjXzAgLy8gMApkdXBuIDMKYnl0ZWNfMCAvLyAiIgpkdXAKdHhuIFNlbmRlcgppbnRjXzIgLy8gNTkxMDk5MzU1CmFzc2V0X2hvbGRpbmdfZ2V0IEFzc2V0QmFsYW5jZQpzdG9yZSAxCnN0b3JlIDAKbG9hZCAxCmxvYWQgMAppbnRjXzAgLy8gMAo+CiYmCi8vIHVuYXV0aG9yaXplZAphc3NlcnQKaW50Y18xIC8vIDEKIQohCmZyYW1lX2J1cnkgMAppbnRjXzAgLy8gMApmcmFtZV9idXJ5IDIKaW50Y18wIC8vIDAKZnJhbWVfYnVyeSAzCmZyYW1lX2RpZyAtMwpmcmFtZV9idXJ5IDcKZnJhbWVfZGlnIDcKZnJhbWVfYnVyeSA2CmludGNfMyAvLyAyOQpmcmFtZV9idXJ5IDQKZnJhbWVfZGlnIDQKZnJhbWVfZGlnIDcKbGVuCisKZnJhbWVfYnVyeSA1CmZyYW1lX2RpZyA1CmludGMgNCAvLyA2NTUzNgo8CmFzc2VydApmcmFtZV9kaWcgNAppdG9iCmV4dHJhY3QgNiAwCmZyYW1lX2RpZyAtMgpmcmFtZV9idXJ5IDcKZnJhbWVfZGlnIDYKZnJhbWVfZGlnIDcKY29uY2F0CmZyYW1lX2J1cnkgNgpmcmFtZV9kaWcgNQpmcmFtZV9idXJ5IDQKZnJhbWVfZGlnIDQKaXRvYgpleHRyYWN0IDYgMApjb25jYXQKYnl0ZWNfMSAvLyAweDAwCmludGNfMCAvLyAwCmZyYW1lX2RpZyAwCnNldGJpdApjb25jYXQKZnJhbWVfZGlnIC0xCml0b2IKY29uY2F0CmZyYW1lX2RpZyAyCml0b2IKY29uY2F0CmZyYW1lX2RpZyAzCml0b2IKY29uY2F0CmZyYW1lX2RpZyA2CmNvbmNhdApmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIC0zCmV4dHJhY3QgMiAwCmJveF9kZWwKcG9wCmZyYW1lX2RpZyAtMwpleHRyYWN0IDIgMApmcmFtZV9kaWcgMQpib3hfcHV0CnJldHN1YgoKLy8gcmVhZF9wcm9wb3NhbApyZWFkcHJvcG9zYWxfMjoKcHJvdG8gMSAxCmJ5dGVjXzAgLy8gIiIKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmJveF9nZXQKc3RvcmUgMwpzdG9yZSAyCmxvYWQgMwphc3NlcnQKbG9hZCAyCmZyYW1lX2J1cnkgMApyZXRzdWIKCi8vIHZvdGVfeWVzCnZvdGV5ZXNfMzoKcHJvdG8gMSAwCmludGNfMCAvLyAwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwbiAzCmJ5dGVjXzAgLy8gIiIKZHVwCnR4biBTZW5kZXIKaW50Y18yIC8vIDU5MTA5OTM1NQphc3NldF9ob2xkaW5nX2dldCBBc3NldEJhbGFuY2UKc3RvcmUgNQpzdG9yZSA0CmxvYWQgNQpsb2FkIDQKaW50Y18wIC8vIDAKPgomJgovLyB1bmF1dGhvcml6ZWQKYXNzZXJ0CmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApib3hfZ2V0CnN0b3JlIDcKc3RvcmUgNgpsb2FkIDcKYXNzZXJ0CmxvYWQgNgpmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKcHVzaGludCAxMyAvLyAxMwpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKaW50Y18xIC8vIDEKKwpmcmFtZV9idXJ5IDIKZnJhbWVfZGlnIDEKcHVzaGludCAyMSAvLyAyMQpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDMKZnJhbWVfZGlnIDEKZnJhbWVfZGlnIDEKcHVzaGludCAyIC8vIDIKZXh0cmFjdF91aW50MTYKZGlnIDEKbGVuCnN1YnN0cmluZzMKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyAxCnB1c2hpbnQgMzIgLy8gMzIKZ2V0Yml0CmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgMQpwdXNoaW50IDUgLy8gNQpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDYKZnJhbWVfZGlnIC0xCmZyYW1lX2J1cnkgMTAKZnJhbWVfZGlnIDEwCmZyYW1lX2J1cnkgOQppbnRjXzMgLy8gMjkKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3CmZyYW1lX2RpZyAxMApsZW4KKwpmcmFtZV9idXJ5IDgKZnJhbWVfZGlnIDgKaW50YyA0IC8vIDY1NTM2CjwKYXNzZXJ0CmZyYW1lX2RpZyA3Cml0b2IKZXh0cmFjdCA2IDAKZnJhbWVfZGlnIDQKZnJhbWVfYnVyeSAxMApmcmFtZV9kaWcgOQpmcmFtZV9kaWcgMTAKY29uY2F0CmZyYW1lX2J1cnkgOQpmcmFtZV9kaWcgOApmcmFtZV9idXJ5IDcKZnJhbWVfZGlnIDcKaXRvYgpleHRyYWN0IDYgMApjb25jYXQKYnl0ZWNfMSAvLyAweDAwCmludGNfMCAvLyAwCmZyYW1lX2RpZyA1CnNldGJpdApjb25jYXQKZnJhbWVfZGlnIDYKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDIKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDMKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDkKY29uY2F0CmZyYW1lX2J1cnkgMQpmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYm94X2RlbApwb3AKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmZyYW1lX2RpZyAxCmJveF9wdXQKcmV0c3ViCgovLyB2b3RlX25vCnZvdGVub180Ogpwcm90byAxIDAKaW50Y18wIC8vIDAKYnl0ZWNfMCAvLyAiIgppbnRjXzAgLy8gMApkdXAKYnl0ZWNfMCAvLyAiIgppbnRjXzAgLy8gMApkdXBuIDMKYnl0ZWNfMCAvLyAiIgpkdXAKdHhuIFNlbmRlcgppbnRjXzIgLy8gNTkxMDk5MzU1CmFzc2V0X2hvbGRpbmdfZ2V0IEFzc2V0QmFsYW5jZQpzdG9yZSA5CnN0b3JlIDgKbG9hZCA5CmxvYWQgOAppbnRjXzAgLy8gMAo+CiYmCi8vIHVuYXV0aG9yaXplZAphc3NlcnQKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmJveF9nZXQKc3RvcmUgMTEKc3RvcmUgMTAKbG9hZCAxMQphc3NlcnQKbG9hZCAxMApmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKcHVzaGludCAyMSAvLyAyMQpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKaW50Y18xIC8vIDEKKwpmcmFtZV9idXJ5IDIKZnJhbWVfZGlnIDEKcHVzaGludCAxMyAvLyAxMwpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDMKZnJhbWVfZGlnIDEKZnJhbWVfZGlnIDEKcHVzaGludCAyIC8vIDIKZXh0cmFjdF91aW50MTYKZGlnIDEKbGVuCnN1YnN0cmluZzMKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyAxCnB1c2hpbnQgMzIgLy8gMzIKZ2V0Yml0CmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgMQpwdXNoaW50IDUgLy8gNQpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDYKZnJhbWVfZGlnIC0xCmZyYW1lX2J1cnkgMTAKZnJhbWVfZGlnIDEwCmZyYW1lX2J1cnkgOQppbnRjXzMgLy8gMjkKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3CmZyYW1lX2RpZyAxMApsZW4KKwpmcmFtZV9idXJ5IDgKZnJhbWVfZGlnIDgKaW50YyA0IC8vIDY1NTM2CjwKYXNzZXJ0CmZyYW1lX2RpZyA3Cml0b2IKZXh0cmFjdCA2IDAKZnJhbWVfZGlnIDQKZnJhbWVfYnVyeSAxMApmcmFtZV9kaWcgOQpmcmFtZV9kaWcgMTAKY29uY2F0CmZyYW1lX2J1cnkgOQpmcmFtZV9kaWcgOApmcmFtZV9idXJ5IDcKZnJhbWVfZGlnIDcKaXRvYgpleHRyYWN0IDYgMApjb25jYXQKYnl0ZWNfMSAvLyAweDAwCmludGNfMCAvLyAwCmZyYW1lX2RpZyA1CnNldGJpdApjb25jYXQKZnJhbWVfZGlnIDYKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDMKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDIKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDkKY29uY2F0CmZyYW1lX2J1cnkgMQpmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYm94X2RlbApwb3AKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmZyYW1lX2RpZyAxCmJveF9wdXQKcmV0c3ViCgovLyBkZWxldGVfcHJvcG9zYWwKZGVsZXRlcHJvcG9zYWxfNToKcHJvdG8gMSAwCnR4biBTZW5kZXIKaW50Y18yIC8vIDU5MTA5OTM1NQphc3NldF9ob2xkaW5nX2dldCBBc3NldEJhbGFuY2UKc3RvcmUgMTMKc3RvcmUgMTIKbG9hZCAxMwpsb2FkIDEyCmludGNfMCAvLyAwCj4KJiYKLy8gdW5hdXRob3JpemVkCmFzc2VydApmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYm94X2RlbApwb3AKcmV0c3ViCgovLyBhZGRfcHJvcG9zYWxfY2FzdGVyCmFkZHByb3Bvc2FsY2FzdGVyXzY6CnByb3RvIDAgMApieXRlY18wIC8vICIiCmR1cAppbnRjXzAgLy8gMAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmZyYW1lX2J1cnkgMAp0eG5hIEFwcGxpY2F0aW9uQXJncyAyCmZyYW1lX2J1cnkgMQp0eG5hIEFwcGxpY2F0aW9uQXJncyAzCmJ0b2kKZnJhbWVfYnVyeSAyCmZyYW1lX2RpZyAwCmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAyCmNhbGxzdWIgYWRkcHJvcG9zYWxfMQpyZXRzdWIKCi8vIHJlYWRfcHJvcG9zYWxfY2FzdGVyCnJlYWRwcm9wb3NhbGNhc3Rlcl83Ogpwcm90byAwIDAKYnl0ZWNfMCAvLyAiIgpkdXAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKY2FsbHN1YiByZWFkcHJvcG9zYWxfMgpmcmFtZV9idXJ5IDAKcHVzaGJ5dGVzIDB4MTUxZjdjNzUgLy8gMHgxNTFmN2M3NQpmcmFtZV9kaWcgMApjb25jYXQKbG9nCnJldHN1YgoKLy8gdm90ZV95ZXNfY2FzdGVyCnZvdGV5ZXNjYXN0ZXJfODoKcHJvdG8gMCAwCmJ5dGVjXzAgLy8gIiIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKY2FsbHN1YiB2b3RleWVzXzMKcmV0c3ViCgovLyB2b3RlX25vX2Nhc3Rlcgp2b3Rlbm9jYXN0ZXJfOToKcHJvdG8gMCAwCmJ5dGVjXzAgLy8gIiIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKY2FsbHN1YiB2b3Rlbm9fNApyZXRzdWIKCi8vIGRlbGV0ZV9wcm9wb3NhbF9jYXN0ZXIKZGVsZXRlcHJvcG9zYWxjYXN0ZXJfMTA6CnByb3RvIDAgMApieXRlY18wIC8vICIiCnR4bmEgQXBwbGljYXRpb25BcmdzIDEKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAwCmNhbGxzdWIgZGVsZXRlcHJvcG9zYWxfNQpyZXRzdWI=";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "add_proposal", desc: "", args: [{ type: "string", name: "name", desc: "" }, { type: "string", name: "description", desc: "" }, { type: "uint64", name: "end_time", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "read_proposal", desc: "", args: [{ type: "string", name: "name", desc: "" }], returns: { type: "(string,string,bool,uint64,uint64,uint64)", desc: "" } }),
        new algosdk.ABIMethod({ name: "vote_yes", desc: "", args: [{ type: "string", name: "proposal_name", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "vote_no", desc: "", args: [{ type: "string", name: "proposal_name", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "delete_proposal", desc: "", args: [{ type: "string", name: "proposal_name", desc: "" }], returns: { type: "void", desc: "" } })
    ];
    async add_proposal(args: {
        name: string;
        description: string;
        end_time: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.add_proposal({ name: args.name, description: args.description, end_time: args.end_time }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async read_proposal(args: {
        name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<[
        string,
        string,
        boolean,
        bigint,
        bigint,
        bigint
    ]>> {
        const result = await this.execute(await this.compose.read_proposal({ name: args.name }, txnParams));
        return new bkr.ABIResult<[
            string,
            string,
            boolean,
            bigint,
            bigint,
            bigint
        ]>(result, result.returnValue as [
            string,
            string,
            boolean,
            bigint,
            bigint,
            bigint
        ]);
    }
    async vote_yes(args: {
        proposal_name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.vote_yes({ proposal_name: args.proposal_name }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async vote_no(args: {
        proposal_name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.vote_no({ proposal_name: args.proposal_name }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async delete_proposal(args: {
        proposal_name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.delete_proposal({ proposal_name: args.proposal_name }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    compose = {
        add_proposal: async (args: {
            name: string;
            description: string;
            end_time: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "add_proposal"), { name: args.name, description: args.description, end_time: args.end_time }, txnParams, atc);
        },
        read_proposal: async (args: {
            name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "read_proposal"), { name: args.name }, txnParams, atc);
        },
        vote_yes: async (args: {
            proposal_name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "vote_yes"), { proposal_name: args.proposal_name }, txnParams, atc);
        },
        vote_no: async (args: {
            proposal_name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "vote_no"), { proposal_name: args.proposal_name }, txnParams, atc);
        },
        delete_proposal: async (args: {
            proposal_name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "delete_proposal"), { proposal_name: args.proposal_name }, txnParams, atc);
        }
    };
}
