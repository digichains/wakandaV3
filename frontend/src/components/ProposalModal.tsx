import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'

import algosdk from 'algosdk'

// Initialize Algorand client
const algodClient = new algosdk.Algodv2('<api-token>', '<algod-server-url>', '<algod-port>')

interface ProposalDetails {
  title: string
  description: string
  startDate: number
  endDate: number
}

async function submitProposal({ title, description, startDate, endDate }: ProposalDetails) {
  try {
    const params = await algodClient.getTransactionParams().do()
    const senderAddress = '<user-address>' // Replace with the actual user address
    const appID: number = 1 // Replace with your deployed app ID

    // Prepare arguments for the smart contract call
    const args: Uint8Array[] = [
      algosdk.encodeObj({
        title,
        description,
        startDate,
        endDate,
      }),
    ]

    const txn = algosdk.makeApplicationNoOpTxn(senderAddress, params, appID, args)
    // Sign the transaction
    // Note: Handle private keys securely
    const privateKey = '<user-private-key>'
    // Convert the private key string to Uint8Array
    const secretKey = new Uint8Array(Buffer.from(algosdk.mnemonicToSecretKey(privateKey).sk))

    // Sign the transaction
    const signedTxn = algosdk.signTransaction(txn, secretKey)

    // Send the transaction
    // const sendTxn = await algodClient.sendRawTransaction(signedTxn).do();
    const sendTxn = await algodClient.sendRawTransaction(signedTxn.blob).do()

    // Optionally, wait for confirmation
    // eslint-disable-next-line no-console
    console.log('Transaction submitted with ID:', sendTxn.txId)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error submitting proposal:', error)
  }
}

interface ProposalModalProps {
  open: boolean
  toggle: () => void
}

const style: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  color: '#999',
  border: '2px solid #000',
  boxShadow: '24px 24px 48px rgba(0, 0, 0, 0.1)',
  padding: 4,
  borderRadius: 5,
}

const ProposalModal: React.FC<ProposalModalProps> = ({ open, toggle }) => {
  return (
    <div>
      <Modal open={open} onClose={toggle} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant={'h5'} fontWeight={'bold'} sx={{ color: '#fff' }}>
              Create Proposal
            </Typography>
            <TextField
              id="outlined-basic"
              label="Proposal title"
              variant="outlined"
              placeholder="Enter Proposal Title..."
              sx={{
                input: { color: '#fff', borderColor: 'white' },
                mt: 2,
                border: 0,
              }}
            />

            <TextField
              id="outlined-basic"
              label="Proposal Description"
              variant="outlined"
              placeholder="Say something about the proposal..."
              sx={{ input: { color: '#fff', borderColor: 'white' }, mt: 2 }}
              rows={4}
              //   multiline
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              sx={{ input: { color: '#fff', borderColor: 'white' }, mt: 2 }}
            />

            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              sx={{ input: { color: '#fff', borderColor: 'white' }, mt: 2 }}
              inputProps={{ style: { borderColor: 'red !important' } }}
            />
            <Button
              sx={{ width: '100%', margin: 'auto', mt: 2 }}
              style={{
                backgroundColor: '#c5ee50',
                color: 'black',
                fontWeight: 'bold',
                borderRadius: 20,
              }}
              variant="contained"
              onClick={toggle}
            >
              Submit proposal
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ProposalModal
