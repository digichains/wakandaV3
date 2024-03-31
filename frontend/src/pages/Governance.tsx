import { useWallet } from '@txnlab/use-wallet'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import Stake from '../stake/page'

interface NavbarProps {
  toggleWalletModal: () => void
}

const Governance: React.FC<NavbarProps> = ({ toggleWalletModal }) => {
  const { activeAddress } = useWallet()

  return (
    <div>
      <Navbar toggleWalletModal={toggleWalletModal} />
      <>
        <Stake />
        <Footer />
      </>
    </div>
  )
}

export default Governance
