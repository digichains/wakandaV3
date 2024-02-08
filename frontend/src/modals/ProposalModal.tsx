/* eslint-disable @typescript-eslint/no-explicit-any */
import * as algokit from '@algorandfoundation/algokit-utils'
import { FormLabel, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useWallet } from '@txnlab/use-wallet'
import * as React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ProposalsClient } from '../contracts/proposals'
import { useFetchWrapper } from '../hooks'
import { API_URL } from '../constants/apiUrl'
import { ASA_ID } from '../constants/AppID'

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
  width: '90%',
  maxWidth: 700,
  bgcolor: '#4D4D4D',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  height: 'auto',

  // Media query for smaller screens (up to 600px)
  '@media (max-width: 600px)': {
    width: '90%',
    maxWidth: '90%',
  },
}

const ProposalModal: React.FC<ProposalModalProps> = ({ open, toggle, typedClient }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [endTime, setEndTime] = useState(0)
  const [endTimeString, setEndTimeString] = useState('')
  const [loading, setLoading] = useState(false)
  const fetchWrapper = useFetchWrapper()

  const { activeAddress, signer } = useWallet()
  const sender = { signer, addr: activeAddress! }

  async function createProposal() {
    setLoading(true)
    console.log('Creating Proposal')

    try {
      toast.loading('Funding app account with 0.2 Algos', { id: 'loader' })

      const res = await typedClient.appClient.fundAppAccount({
        amount: algokit.microAlgos(200_000),
        sender,
      })

      console.log(res)
      toast.dismiss('loader')
      toast.success('App account funded with 0.2 Algos')
      toast.loading('Creating Proposal', { id: 'loader' })
      const { appId } = await typedClient.appClient.getAppReference()
      const response: any = await typedClient.addProposal(
        {
          name,
          description,
          end_time: endTime,
          membership_token: ASA_ID,
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
        uploadProposal(Number(appId))
      }
    } catch (error) {
      console.error(error)
      toast.dismiss('loader')
      toast.error((error as any)?.message)
      setLoading(false)
    }
  }

  async function submit() {
    await createProposal()
  }

  async function uploadProposal(appId: number) {
    toast.loading('Uploading Proposal', { id: 'loader' })

    const response: any = await fetchWrapper.post(`${API_URL}/api/v1/proposals/proposal/`, {
      name,
      description,
      end_time: endTimeString,
      app_id: appId,
    })

    toast.dismiss('loader')

    console.log(response)

    if (response.error) {
      toast.error(response.error?.toString())
    } else {
      toast.success('Proposal uploaded successfully')
      toggle()
    }
  }

  return (
    <div>
      <Modal open={open} onClose={toggle} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              variant={'h5'}
              fontWeight={'bold'}
              sx={{
                color: '#fff',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Create Proposal
            </Typography>
            <FormLabel component="legend">Proposal Title</FormLabel>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Proposal Title..."
              sx={{
                input: { color: '#fff', borderColor: 'white' },
                mt: 1,
                mb: 3,
                border: 0,
              }}
            />
            <FormLabel component="legend">Proposal Description</FormLabel>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              placeholder="Say something about the proposal..."
              sx={{ input: { color: '#fff', borderColor: 'white' }, mt: 1, mb: 3 }}
              rows={4}
              //   multiline
            />
            {/* <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              sx={{ input: { color: '#fff', borderColor: 'white' }, mt: 2 }}
            /> */}

            <FormLabel component="legend">Set Date and Time</FormLabel>
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
              sx={{ input: { color: '#fff', borderColor: 'white' }, mt: 1, mb: 7 }}
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
