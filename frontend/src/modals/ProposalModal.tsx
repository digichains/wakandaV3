/* eslint-disable @typescript-eslint/no-explicit-any */
import * as algokit from '@algorandfoundation/algokit-utils'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useWallet } from '@txnlab/use-wallet'
import * as React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ProposalsClient } from '../contracts/proposals'

interface ProposalModalProps {
  open: boolean
  toggle: () => void
  typedClient: ProposalsClient
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: '#999',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
}

const ProposalModal: React.FC<ProposalModalProps> = ({ open, toggle, typedClient }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [endTime, setEndTime] = useState(0)
  const [endTimeString, setEndTimeString] = useState('')
  const [loading, setLoading] = useState(false)

  const { activeAddress, signer } = useWallet()
  const sender = { signer, addr: activeAddress! }

  async function createContract() {
    setLoading(true)
    console.log('Calling createApplication')

    try {
      toast.loading('Creating application', { id: 'loader' })
      const response: any = await typedClient.create.bare({
        sender,
      })
      console.log(response)

      if (response.appId) {
        toast.success('Contract created successfully')
      }

      toast.dismiss('loader')
      setLoading(false)
    } catch (error) {
      console.error(error)
      toast.dismiss('loader')
      toast.error(error?.message)
      setLoading(false)
    }
  }

  async function createProposal() {
    setLoading(true)
    console.log('Creating Proposal')

    try {
      toast.loading('Funding app account', { id: 'loader' })

      const res = await typedClient.appClient.fundAppAccount({
        amount: algokit.microAlgos(200_000),
        sender,
      })

      console.log(res)
      toast.dismiss('loader')
      toast.success('App account funded with 200_000 microAlgos')
      toast.loading('Creating Proposal', { id: 'loader' })
      const { appId } = await typedClient.appClient.getAppReference()
      const response: any = await typedClient.addProposal(
        {
          name,
          description,
          end_time: endTime,
        },
        {
          sender,
          boxes: [
            {
              appId,
              name: name,
            },
          ],
        },
      )
      console.log(response)

      toast.dismiss('loader')
      setLoading(false)

      if (response?.transaction) {
        toast.success('The Proposal was created successfully')
        toggle()
      }
    } catch (error) {
      console.error(error)
      toast.dismiss('loader')
      toast.error(error?.message)
      setLoading(false)
    }
  }

  async function submit() {
    await createProposal()
  }

  return (
    <div>
      <Modal open={open} onClose={toggle} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant={'h5'} fontWeight={'bold'} sx={{ color: '#fff' }}>
              Create Proposal
            </Typography>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="outlined-basic"
              label="Proposal Description"
              variant="outlined"
              placeholder="Say something about the proposal..."
              sx={{ input: { color: '#fff', borderColor: 'white' }, mt: 2 }}
              rows={4}
              //   multiline
            />
            {/* <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              sx={{ input: { color: '#fff', borderColor: 'white' }, mt: 2 }}
            /> */}

            <TextField
              value={endTimeString}
              onChange={(e) => {
                const timeString = e.target.value
                const date = new Date(timeString)
                console.log(timeString)

                setEndTime(date.valueOf())
                setEndTimeString(timeString)
              }}
              type="datetime-local"
              id="outlined-basic"
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
              onClick={submit}
              disabled={loading}
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
