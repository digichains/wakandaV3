import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { DaffiWalletConnect } from '@daffiwallet/connect'
import { PeraWalletConnect } from '@perawallet/connect'
import { PROVIDER_ID, ProvidersArray, WalletProvider, useInitializeProviders, useWallet } from '@txnlab/use-wallet'
import algosdk from 'algosdk'
import { SnackbarProvider } from 'notistack'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppCalls from './components/AppCalls'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import About from './pages/About'
import Communities from './pages/Communities'
import Governance from './pages/Governance'
import Home from './pages/Home'
import { getAlgodConfigFromViteEnvironment } from './utils/network/getAlgoClientConfigs'
import Faucet from './pages/Faucet'

let providersArray: ProvidersArray
if (import.meta.env.VITE_ALGOD_NETWORK === '') {
  providersArray = [{ id: PROVIDER_ID.KMD }]
} else {
  providersArray = [
    { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
    { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
    { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
    { id: PROVIDER_ID.EXODUS },
    // If you are interested in WalletConnect v2 provider
    // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
  ]
}

export default function App() {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal)
  }

  const toggleAppCallsModal = () => {
    setAppCallsDemoModal(!appCallsDemoModal)
  }

  useEffect(() => {
    console.log(openWalletModal)
  }, [openWalletModal])

  const algodConfig = getAlgodConfigFromViteEnvironment()

  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: algodConfig.network,
      nodeServer: algodConfig.server,
      nodePort: String(algodConfig.port),
      nodeToken: String(algodConfig.token),
    },
    algosdkStatic: algosdk,
  })

  //   return (
  //     <SnackbarProvider maxSnack={3}>
  //       <WalletProvider value={walletProviders}>
  //         <div className="hero min-h-screen bg-teal-400">
  //           <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white mx-auto">
  //             <div className="max-w-md">
  //               <h1 className="text-4xl">
  //                 Welcome to <div className="font-bold">AlgoKit 🙂</div>
  //               </h1>
  //               <p className="py-6">
  //                 This starter has been generated using official AlgoKit React template. Refer to the resource below for next steps.
  //               </p>

  //               <div className="grid">
  //                 <a
  //                   data-test-id="getting-started"
  //                   className="btn btn-primary m-2"
  //                   target="_blank"
  //                   href="https://github.com/algorandfoundation/algokit-cli"
  //                 >
  //                   Getting started
  //                 </a>

  //                 <div className="divider" />
  //                 <button data-test-id="connect-wallet" className="btn m-2" onClick={toggleWalletModal}>
  //                   Wallet Connection
  //                 </button>

  //                 {activeAddress && (
  //                   <button data-test-id="transactions-demo" className="btn m-2" onClick={toggleDemoModal}>
  //                     Transactions Demo
  //                   </button>
  //                 )}

  //                 {activeAddress && (
  //                   <button data-test-id="appcalls-demo" className="btn m-2" onClick={toggleAppCallsModal}>
  //                     Contract Interactions Demo
  //                   </button>
  //                 )}
  //               </div>

  //               <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
  //               <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
  //               <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
  //             </div>
  //           </div>
  //         </div>
  //       </WalletProvider>
  //     </SnackbarProvider>
  //   )
  // }

  return (
    <SnackbarProvider maxSnack={3}>
      <WalletProvider value={walletProviders}>
        <div className="flex flex-col w-[100%] overflow-hidden">
          <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
          {/* <ConnectWallet openModal={true} closeModal={toggleWalletModal} /> */}
          {/* {activeAddress && <div data-test-id="transactions-demo" className="btn m-2" onClick={toggleDemoModal}></div>} */}
          {/* {activeAddress && (
            <button data-test-id="appcalls-demo" className="btn m-2" onClick={toggleAppCallsModal}>
              Contract Interactions Demo
            </button>
          )} */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Governance" element={<Governance toggleWalletModal={toggleWalletModal} />} />
            <Route path="/Communities" element={<Communities />} />
            <Route path="/Faucet" element={<Faucet toggleWalletModal={toggleWalletModal} />} />
            <Route path="/About" element={<About toggleWalletModal={toggleWalletModal} />} />
          </Routes>

          <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
          <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
          <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
        </div>
      </WalletProvider>
    </SnackbarProvider>
  )
}
