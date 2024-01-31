import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from '@mui/material'
import VotingRadio from './VotingRadios'
import VoterInfo from './VoterInfo'
import VoteData from './VoteInfo'
import { IProposal } from '../interfaces/proposal'
import { ProposalsClient } from '../contracts/proposals'
import toast from 'react-hot-toast'
import { useWallet } from '@txnlab/use-wallet'
import { useFetchWrapper } from '../hooks'
import { API_URL } from '../constants/apiUrl'

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [votingEndsIn, setVotingEndsIn] = React.useState<VotingEndsIn>({
    days: 6,
    hours: 20,
    minutes: 23,
    seconds: 12,
  })

  const { activeAddress, signer } = useWallet()
  const sender = { signer, addr: activeAddress! }

  const yesPercentage = 100 * yes_count / (yes_count + no_count)
  const noPercentage  = 100 * no_count / (yes_count + no_count)
  const [noVote, setNoVote] = React.useState(false);
  const [yesVote, setYesVote] = React.useState(false);
  const fetchWrapper = useFetchWrapper();

  const castVote = async (type: boolean) => {
    setYesVote(true)
    setNoVote(true)

    toast.loading('Casting vote', { id: 'loader' })

    try {
      const res = type ?
        await typedClient.voteYes(
          {
            proposal_name: name,
          },
          {
            sender,
            boxes: [
              {
                appId: Number(app_id),
                name,
              }
            ]
          }
        ) :
        await typedClient.voteNo(
          {
            proposal_name: name,
          },
          {
            sender,
            boxes: [
              {
                appId: Number(app_id),
                name,
              }
            ],
          }
        );

      toast.dismiss('loader');
      toast.success('Your vote was recorded successfully');

      console.log(res.return);

      if (type) {
        setNoVote(false);
      } else {
        setYesVote(false);
      }

      viewProposalDetails();
    } catch (error) {
      console.error(error)
      toast.dismiss('loader')
      toast.error((error as any)?.message)
      setYesVote(false);
      setNoVote(false);
    }
  };

  const viewProposalDetails = async () => {
    toast.loading('Loading updated proposal details', { id: 'loader' });

    try {
      const res = await typedClient.readProposal(
        { name },
        {
          sender,
            boxes: [
              {
                appId: Number(app_id),
                name,
              }
            ]
        }
      );

      toast.dismiss('loader');

      if (res.return?.end_time) {
        updateProposalDetails({
          no_count: Number(res.return.no_count),
          yes_count: Number(res.return.yes_count),
          name,
          end_time,
        });
      }
    } catch (error) {
      console.error(error)
      toast.dismiss('loader')
      toast.error((error as any)?.message)
    }
  };

  const updateProposalDetails = async (payload: any) => {
    toast.loading('Updating proposal details', { id: 'loader' });

    const response = await fetchWrapper.put(`${API_URL}/api/v1/proposals/proposal/${id}/`, payload);

    toast.dismiss('loader');

    if (response && Object.keys(response).includes('error')) {
      toast.error(response.error?.toString());
    } else {
      toast.success('Proposal details updated successfully');
      refresh();
    }
  };

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

  return (
    <Box>
      <Accordion sx={{ bgcolor: '#222' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white', position: 'relative', bottom: 10 }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box width={'100%'}>
            <Typography color={'#fff'}>{name}</Typography>
            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
              <VotingRadio
                yesPercentage={isNaN(yesPercentage) ? 0 : yesPercentage}
                noPercentage={isNaN(noPercentage) ? 0 : noPercentage}
                yesVote={yesVote}
                noVote={noVote}
                onVote={castVote}
              />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} width={'100%'} mt={2}>
              <Typography color={'#fff'} padding={1} bgcolor={'#292f28'} borderRadius={5} width={'20%'} textAlign={'center'}>
                No Voting Power
              </Typography>
              <Box display={'flex'} justifyContent={'space-between'} width={'50%'}>
                <Typography color={'#fff'} padding={1} bgcolor={'blue'} borderRadius={5} width={'fit-content'} textAlign={'center'}>
                  Tag #{app_id}
                </Typography>
                <Typography color={'#fff'} padding={1} bgcolor={'#c23d34'} borderRadius={5} width={'20%'} textAlign={'center'}>
                  {is_open  ? 'Active' : 'Inactive' }
                </Typography>

                <Typography
                  color={'#fff'}
                  padding={1}
                  bgcolor={'#555'}
                  borderRadius={5}
                  width={'50%'}
                  textAlign={'center'}
                  fontWeight={'bold'}
                >
                  {/* Voting ends in: {votingEndsIn.days} days {votingEndsIn.hours}h {votingEndsIn.minutes}m {votingEndsIn.seconds}s */}
                  Voting ends in: {(new Date(end_time)).toLocaleString()}
                </Typography>
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography color={'#fff'} width={'70%'}>
              {/* In the heart of Agorand, Nigeria, a vibrant and inclusive community event is set to unfold, inviting residents, local
              businesses, and organizations to come together in celebration and collaboration. this gathering aims to achieve a multifaceted
              impact by fostering community engagement, providing educational opportunities, celebrating the rich cultural heritage of the
              region, and creating a platform for meaningful networking. */}
              {description}
            </Typography>
            <Box width={'25%'}>
              <VoterInfo created_on={created_on} end_time={end_time} total_votes={yes_count + no_count} />
            </Box>
          </Box>

          <Box display={'flex'} justifyContent={'flex-start'}>
            <VoteData title={'Yes'} totalvotes={1200} />
            <VoteData title={'No'} totalvotes={300} />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default ProposalAccordion
