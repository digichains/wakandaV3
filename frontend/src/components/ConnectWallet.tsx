import { Provider, useWallet } from '@txnlab/use-wallet'
import Account from './Account'
import styles from './index.module.scss'
interface ConnectWalletInterface {
  openModal: boolean
  closeModal: () => void
}

const ConnectWallet = ({ openModal, closeModal }: ConnectWalletInterface) => {
  const { providers, activeAddress } = useWallet()
  const isKmd = (provider: Provider) => provider.metadata.name.toLowerCase() === 'kmd'

  console.log(`${providers}`)
  if (!openModal) return null
  return (
    <div className={styles.modal}>
      <div id="connect_wallet_modal" className="dialog">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Select wallet provider</h3>

          <div className={styles.trust}>
            {activeAddress && (
              <>
                <Account />
                <div className="divider" />
              </>
            )}

            {!activeAddress &&
              providers?.map((provider) => (
                <button
                  data-test-id={`${provider.metadata.id}-connect`}
                  className={styles.individual}
                  key={`provider-${provider.metadata.id}`}
                  onClick={() => {
                    return provider.connect()
                  }}
                >
                  {!isKmd(provider) && (
                    <img
                      alt={`wallet_icon_${provider.metadata.id}`}
                      src={provider.metadata.icon}
                      style={{ objectFit: 'contain', width: '30px', height: 'auto' }}
                      className={styles.icons}
                    />
                  )}
                  <span className={styles.names}>
                  {isKmd(provider) ? 'LocalNet Wallet' : provider.metadata.name }</span>
                </button>
              ))}
          </div>

          <div className="modal-action ">
            <button
              data-test-id="close-wallet-modal"
              className="btn  mr-10 bg-[#EBE8E2] text-black p-3 w-[100px] rounded-md"
              onClick={() => {
                closeModal()
              }}
            >
              Close
            </button>
            {activeAddress && (
              <button
                className="btn btn-warning bg-[red] text-white p-3 w-[100px] rounded-md "
                data-test-id="logout"
                onClick={() => {
                  if (providers) {
                    const activeProvider = providers.find((p) => p.isActive)
                    if (activeProvider) {
                      activeProvider.disconnect()
                    } else {
                      // Required for logout/cleanup of inactive providers
                      // For instance, when you login to localnet wallet and switch network
                      // to testnet/mainnet or vice verse.
                      localStorage.removeItem('txnlab-use-wallet')
                      window.location.reload()
                    }
                  }
                }}
              >
                Logout
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
export default ConnectWallet
