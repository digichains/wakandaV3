import { Box, Card, Divider, SxProps } from '@mui/material'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import * as React from 'react'

interface VoteInfo {
  columName: string
  value: string | number
}

interface ViewMoreModalProps {
  open: boolean
  toggle: () => void
  title: string
  amount: number
}

const ViewMoreModal: React.FC<ViewMoreModalProps> = ({ open, toggle, title, amount }) => {
  const voteInfo: VoteInfo[] = [
    { columName: 'Wallet', value: 'Amount' },
    { columName: '0xe33443...3434', value: 1900999 },
    { columName: '0xe33443...3434', value: 98000 },
    { columName: '0xe33443...3434', value: 1040 },
    { columName: '0xe33443...3434', value: 546000 },
  ]

  const style: SxProps = {
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

  const Row = ({ title, value }: { title: string; value: string | number }) => {
    return (
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography color={'#fff'} mt={1}>
          {title}
        </Typography>
        <Typography color={'#fff'} mt={1}>
          {value}
        </Typography>
      </Box>
    )
  }

  return (
    <div>
      <Modal open={open} onClose={toggle} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box display={'flex'} flexDirection={'column'}>
            <Card
              variant="outlined"
              sx={{
                width: '100%',
                minHeight: 200,
                bgcolor: '#292f28',
                padding: 2,
                mt: 2,
                ml: 2,
              }}
            >
              <Box display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6" fontWeight={'bold'} color={'#fff'} textAlign={'center'}>
                  {title}
                </Typography>

                <Typography variant="h6" fontWeight={'bold'} color={'#fff'} textAlign={'center'}>
                  {amount}
                </Typography>
              </Box>
              {voteInfo.map((item, index) => (
                <Box key={`vote-info-row${index}`}>
                  <Row title={item.columName} value={item.value} />
                  <Divider sx={{ bgcolor: '#eee' }} />
                </Box>
              ))}
              {/* <ViewMoreModal toggle={toggleModal} open={open} /> */}
            </Card>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ViewMoreModal
