import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Grid, useMediaQuery } from '@mui/material'
import VotingRadio from './VotingRadios'
import VoterInfo from './VoterInfo'
import VoteData from './VoteInfo'
import { IProposal } from '../interfaces/proposal'
import { ProposalsClient } from '../contracts/proposals'
import toast from 'react-hot-toast'
import { useWallet } from '@txnlab/use-wallet'
import { useFetchWrapper } from '../hooks'
import { API_URL } from '../constants/apiUrl'
import { ASA_ID } from '../constants/AppID'
import DeleteButton from './delete/DeleteButton'

interface VotingEndsIn {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const ProposalAccordion: React.FC<{
  proposal: IProposal
  typedClient: ProposalsClient
  refresh: () => void
}> = ({ proposal, typedClient, refresh }) => {
  const { name, description, yes_count, no_count, id, app_id, created_on, is_open, end_time } = proposal

  const isSmallerScreen = useMediaQuery('(max-width:600px)')

  const [votingEndsIn, setVotingEndsIn] = React.useState<VotingEndsIn>({
    days: 6,
    hours: 20,
    minutes: 23,
    seconds: 12,
  })

  const { activeAddress, signer } = useWallet()
  const sender = { signer, addr: activeAddress || '' }

  const [voteCasted, setVoteCasted] = React.useState<'yes' | 'no' | undefined>(undefined)

  const yesPercentage = (100 * yes_count) / (yes_count + no_count)
  const noPercentage = (100 * no_count) / (yes_count + no_count)
  const [noVote, setNoVote] = React.useState(false)
  const [yesVote, setYesVote] = React.useState(false)
  const fetchWrapper = useFetchWrapper()

  const castVote = async (type: 'yes' | 'no') => {
    setYesVote(true)
    setNoVote(true)
    setVoteCasted(type)

    toast.loading('Casting vote', { id: 'loader' })

    const payload = {
      wallet_address: activeAddress,
      vote_value: type === 'yes',
      proposal: id,
    }
    console.log('type', type)

    try {
      const res = type
        ? await typedClient.voteYes(
            {
              proposal_name: name,
              membership_token: ASA_ID,
            },
            {
              sender,
              boxes: [
                {
                  appId: Number(app_id),
                  name,
                },
              ],
            },
          )
        : await typedClient.voteNo(
            {
              proposal_name: name,
              membership_token: ASA_ID,
            },
            {
              sender,
              boxes: [
                {
                  appId: Number(app_id),
                  name,
                },
              ],
            },
          )

      toast.dismiss('loader')
      toast.success('Your vote was recorded successfully')

      console.log(res.return)

      if (type) {
        setNoVote(false)
      } else {
        setYesVote(false)
      }

      viewProposalDetails(payload)
    } catch (error) {
      console.error(error)
      toast.dismiss('loader')
      toast.error((error as any)?.message)
      setYesVote(false)
      setNoVote(false)
    }
  }

  const viewProposalDetails = async (payload: any) => {
    toast.loading('Loading updated proposal details', { id: 'loader' })

    try {
      const res = await typedClient.readProposal(
        { name },
        {
          sender,
          boxes: [
            {
              appId: Number(app_id),
              name,
            },
          ],
        },
      )

      toast.dismiss('loader')
      console.log(res.return)

      if (res.return?.end_time) {
        updateProposalDetails(payload)
      }
    } catch (error) {
      console.error(error)
      toast.dismiss('loader')
      toast.error((error as any)?.message)
    }
  }

  const updateProposalDetails = async (payload: any) => {
    toast.loading('Updating proposal details', { id: 'loader' })

    const response = await fetchWrapper.post(`${API_URL}/api/v1/proposals/vote/`, payload)

    toast.dismiss('loader')

    if (response && Object.keys(response).includes('error')) {
      toast.error(response.error?.toString())
    } else {
      toast.success('Proposal details updated successfully')
      refresh()
    }
  }
  // delete button popUP

  // const deleteProposal = async () => {
  //   try {
  //     const response = await fetchWrapper.delete(`${API_URL}/api/v1/proposals/proposal/${id}/`)
  //     if (response && Object.keys(response).includes('error')) {
  //       toast.error(response.error?.toString())
  //     } else {
  //       toast.success('Proposal deleted successfully')
  //       refresh()
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     toast.error(error.message || 'Failed to delete proposal')
  //   }
  // }

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Update the countdown every second
      setVotingEndsIn((prev) => {
        const { days, hours, minutes, seconds } = prev

        // Calculate the remaining time
        const totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds - 1

        return {
          days: Math.floor(totalSeconds / (24 * 60 * 60)),
          hours: Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)),
          minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
          seconds: totalSeconds % 60,
        }
      })
    }, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const [showDeletePopup, setShowDeletePopup] = React.useState(false)
  const handleDeleteButtonClick = () => {
    setShowDeletePopup(true)
  }

  const handleCancelDelete = () => {
    setShowDeletePopup(false)
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Accordion sx={{ bgcolor: '#222'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white', position: 'relative', bottom: 10 }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box width={'100%'}>
                <Typography color={'#fff'} paddingBottom={'1rem'}>{name}</Typography>
                <Box display={'flex'} borderRadius={'50px'} justifyContent={'space-between'} width={'100%'}>
                  <VotingRadio
                    yesPercentage={isNaN(yesPercentage) ? 0 : yesPercentage}
                    noPercentage={isNaN(noPercentage) ? 0 : noPercentage}
                    yesVote={yesVote}
                    noVote={noVote}
                    onVote={castVote}
                  />
                </Box>
                <Box
                  display={isSmallerScreen ? 'block' : 'flex'}
                  justifyContent={'space-between'}
                  mt={2}
                  width={isSmallerScreen ? '100%' : '100%'}
                >
                  <Typography
                    color={'#fff'}
                    padding={1}
                    bgcolor={'#292f28'}
                    borderRadius={4}
                    width={isSmallerScreen ? '40%' : '20%'}
                    height={isSmallerScreen ? '30%' : '30%'}
                    textAlign={'center'}
                    marginLeft={isSmallerScreen ? '1%' : 'none'}
                    fontSize={isSmallerScreen ? '0.8rem' : '1rem'} // Adjust font size for smaller screens
                  >
                    No Voting Power
                  </Typography>
                  <Box
                    display={isSmallerScreen ? 'flex' : 'flex'}
                    justifyContent={'space-between'}
                    width={isSmallerScreen ? '100%' : '70%'}
                  >
                    <Typography
                      color={'#fff'}
                      padding={isSmallerScreen ? '1rem' : '5px'}
                      bgcolor={'blue'}
                      borderRadius={5}
                      width={isSmallerScreen ? '40%' : '40%'}
                      height={isSmallerScreen ? '40%' : '80%'}
                      marginLeft={isSmallerScreen ? '1%' : 'none'}
                      marginTop={isSmallerScreen ? '5%' : 'none'}
                      textAlign={'center'}
                      marginRight={1}
                      fontSize={isSmallerScreen ? '0.45rem' : '1rem'} // Adjust font size for smaller screens
                    >
                      Tag #{app_id.substring(0, 2)}
                    </Typography>

                    <Typography
                      color={'#fff'}
                      padding={isSmallerScreen ? '1rem' : '5px'}
                      bgcolor={'#c23d34'}
                      borderRadius={5}
                      textAlign={'center'}
                      marginRight={1}
                      fontSize={isSmallerScreen ? '0.45rem' : '1rem'}
                      width={isSmallerScreen ? '40%' : '20%'}
                      height={isSmallerScreen ? '10%' : '80%'}
                      marginTop={isSmallerScreen ? '5%' : 'none'}
                    >
                      {is_open ? 'Active' : 'Inactive'}
                    </Typography>

                    <Typography
                      color={'#CAFFBB'}
                      padding={isSmallerScreen ? '1rem' : '9px'}
                      bgcolor={'#555'}
                      borderRadius={5}
                      textAlign={'center'}
                      fontWeight={'bold'}
                      marginRight={1}
                      fontSize={isSmallerScreen ? '0.5rem' : '0.6rem'}
                      width={isSmallerScreen ? '100%' : '30%'}
                      height={isSmallerScreen ? '10%' : '80%'}
                      marginTop={isSmallerScreen ? '5%' : 'none'}
                    >
                      Voting ends in: {new Date(end_time).toLocaleString()}
                    </Typography>
                    <Typography
                      color={'red'}
                      padding={isSmallerScreen ? '1rem' : '5px'}
                      bgcolor={'#fff'}
                      borderRadius={5}
                      textAlign={'center'}
                      marginRight={1}
                      fontSize={isSmallerScreen ? '0.45rem' : '0.6rem'}
                      width={isSmallerScreen ? '40%' : '30%'}
                      height={isSmallerScreen ? '10%' : '80%'}
                      marginTop={isSmallerScreen ? '5%' : 'none'}
                    >
                      <Button onClick={handleDeleteButtonClick}>Delete</Button>

                      {/* DeleteButton popup */}
                      {showDeletePopup && (
                        <DeleteButton
                          proposal={proposal}
                          typedClient={typedClient}
                          refresh={refresh}
                          onCancel={handleCancelDelete} // Pass onCancel function to close the popup
                        />
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box display={'flex'} justifyContent={'space-between'}>
                <Typography color={'#fff'} width={'70%'}>
                  {description}
                </Typography>
                <Box width={'25%'}>
                  <VoterInfo created_on={created_on} end_time={end_time} total_votes={yes_count + no_count} />
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProposalAccordion
