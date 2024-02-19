import React from 'react'
import { useFetchWrapper } from '../../hooks'
import { API_URL } from '../../constants/apiUrl'
import toast from 'react-hot-toast'
import { IProposal } from '../../interfaces/proposal'
import { ProposalsClient } from '../../contracts/proposals'
import { Button, Dialog, DialogActions, DialogTitle, useMediaQuery } from '@mui/material'

const DeleteButton: React.FC<{
  proposal: IProposal
  typedClient: ProposalsClient
  refresh: () => void
}> = ({ proposal, typedClient, refresh }) => {
  const { id } = proposal
  const fetchWrapper = useFetchWrapper()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCancelDelete = () => {
    handleClose()
  }

  const deleteProposal = async () => {
    try {
      const response = await fetchWrapper.delete(`${API_URL}/api/v1/proposals/proposal/${id}/`)
      if (response && Object.keys(response).includes('error')) {
        toast.error(response.error?.toString())
      } else {
        toast.success('Proposal deleted successfully')
        refresh()
        handleClose()
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message || 'Failed to delete proposal')
    }
  }
  const isSmallerScreen = useMediaQuery('(max-width:600px)')
  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { backgroundColor: '#46464A', textAlign: 'center', padding: '3rem', borderRadius: '15px' } }}
      >
        <DialogTitle style={{ color: '#fff'}}>Are you sure you want to delete this proposal?</DialogTitle>
        <DialogActions style={{ justifyContent: 'center', flexDirection: isSmallerScreen ? 'column' : 'row' }}>
          <Button
            onClick={deleteProposal}
            color="secondary"
            autoFocus
            style={{
              color: '#fff',
              borderRadius: '15px',
              backgroundColor: 'red',
              width: isSmallerScreen ? '100%' : '50%',
              marginBottom: isSmallerScreen ? '10px' : '0',
              marginRight: isSmallerScreen ? '0' : '10px',
            }}
          >
            Yes,Delete
          </Button>
          <Button
            onClick={handleCancelDelete}
            color="primary"
            style={{ color: '#000', borderRadius: '15px', backgroundColor: '#fff', width: isSmallerScreen ? '100%' : '50%' }}
          >
            No,Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteButton
