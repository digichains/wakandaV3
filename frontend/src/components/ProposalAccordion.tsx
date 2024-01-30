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

interface VotingEndsIn {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const ProposalAccordion: React.FC<{ title: string }> = ({ title }) => {
  const [votingEndsIn, setVotingEndsIn] = React.useState<VotingEndsIn>({
    days: 6,
    hours: 20,
    minutes: 23,
    seconds: 12,
  })

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
            <Typography color={'#fff'}>{title}</Typography>
            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
              <VotingRadio />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} width={'100%'} mt={2}>
              <Typography color={'#fff'} padding={1} bgcolor={'#292f28'} borderRadius={5} width={'20%'} textAlign={'center'}>
                No Voting Power
              </Typography>
              <Box display={'flex'} justifyContent={'space-between'} width={'50%'}>
                <Typography color={'#fff'} padding={1} bgcolor={'blue'} borderRadius={5} width={'20%'} textAlign={'center'}>
                  Tag #31
                </Typography>
                <Typography color={'#fff'} padding={1} bgcolor={'#c23d34'} borderRadius={5} width={'20%'} textAlign={'center'}>
                  Active
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
                  Voting ends in: {votingEndsIn.days} days {votingEndsIn.hours}h {votingEndsIn.minutes}m {votingEndsIn.seconds}s
                </Typography>
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography color={'#fff'} width={'70%'}>
              In the heart of Agorand, Nigeria, a vibrant and inclusive community event is set to unfold, inviting residents, local
              businesses, and organizations to come together in celebration and collaboration. this gathering aims to achieve a multifaceted
              impact by fostering community engagement, providing educational opportunities, celebrating the rich cultural heritage of the
              region, and creating a platform for meaningful networking.
            </Typography>
            <Box width={'25%'}>
              <VoterInfo />
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
