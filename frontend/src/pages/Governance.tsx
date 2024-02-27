import { useWallet } from '@txnlab/use-wallet'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

interface NavbarProps {
  toggleWalletModal: () => void
}

const Governance: React.FC<NavbarProps> = ({ toggleWalletModal }) => {
  const { activeAddress } = useWallet()

  return <Navbar toggleWalletModal={toggleWalletModal} />
}

export default Governance
