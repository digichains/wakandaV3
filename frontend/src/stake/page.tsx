'use client'

import * as algokit from '@algorandfoundation/algokit-utils'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import HistoryIcon from '@mui/icons-material/History'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import { Box, Button, Divider, OutlinedInput, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import React, { useEffect, useState } from 'react'
import ProposalAccordion from '../components/ProposalAccordion'
import { SearchBarMenu } from '../components/SearchBar'
import StakeInfoCard from '../components/StakeInfoCard'
import { APP_ID } from '../constants/AppID'
import { ProposalsClient } from '../contracts/proposals'
import ProposalModal from '../modals/ProposalModal'
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'
import toast from 'react-hot-toast'
import { useFetchWrapper } from '../hooks'
import { API_URL } from '../constants/apiUrl'
import { IProposal } from '../interfaces/proposal'

const Stake: React.FC = () => {
  const menuItems: string[] = ['All', 'Projects', 'Users', 'Time', 'Action']
  const [open, setOpen] = useState<boolean>(false)
  const [proposals, setProposals] = useState<IProposal[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const toggleModal = () => setOpen(!open)
  const algodConfig = getAlgodConfigFromViteEnvironment()
  const fetchWrapper = useFetchWrapper();

  const fetchAllProposals = async () => {
    toast.loading('Loading proposals', { id: 'loader' });

    const response = await fetchWrapper.get(`${API_URL}/api/v1/proposals/proposal`);

    toast.dismiss('loader');

    if (response && Object.keys(response).includes('error')) {
      toast.error('Error loading proposals');
      return;
    } else {
      setProposals(response);
    }
  };

  const filterProposals = () => {
    if (searchTerm) {
      return proposals.filter((proposal) => proposal.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return proposals;
  }

  const algodClient = algokit.getAlgoClient({
    server: algodConfig.server,
    port: algodConfig.port,
    token: algodConfig.token,
  });

  const typedClient = new ProposalsClient(
    {
      resolveBy: 'id',
      id: APP_ID,
    },
    algodClient,
  );

  useEffect(() => {
    fetchAllProposals();
  }, [open]);

  return (
    <Box bgcolor={'#1a2118'}>
      <Box width={'100%'} margin={'auto'} display={'flex'} justifyContent={'space-between'} padding={2.5} paddingBottom={0}>
        <Typography variant="h5" color={'#fff'}>
          Vote - Participate in decision making
        </Typography>
      </Box>
      <Box padding={2.5} paddingTop={1}>
        <Divider sx={{ bgcolor: '#fff' }} />
      </Box>
      <Box padding={2.5} display={'flex'} justifyContent={'space-between'}>
        <StakeInfoCard title={'Your Reward | Claimed '} secondRowValue={'0 WKD NFT'} thirdRowValue={'0 USD'} />

        <StakeInfoCard title={'Your voting power'} secondRowValue={'10%'} thirdRowValue={'----'} />
      </Box>

      <Box p={2.5} pt={0}>
        <Typography fontStyle={'italic'} color={'#999'}>
          Note: Voting on DAO WAKANDA is only available on Algorand chain.
        </Typography>
      </Box>

      <Box p={2.5} mt={5} pb={0}>
        <Typography color={'#fff'} variant="h5">
          DAO Wakanda is a decentralized autonomous organization, to revolutionize community engagement and participation within Algorand
          Nigeria. This platform has been designed to create a vibrant ecosystem where contributors and developers are incentivized and
          rewarded for their invaluable contributions.
        </Typography>
      </Box>
      <Box p={2.5} display={'flex'} justifyContent={'space-between'} mt={5}>
        <Box flex={1.5} color={'#fff'}>
          <Typography variant="h5">Proposals</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} flex={1}>
          <Link href={'#'}>
            <Typography color="#fff">
              <HistoryIcon /> History
            </Typography>
          </Link>
          <Link href={'#'}>
            <Typography color="#fff">
              <ForumOutlinedIcon /> Forum
            </Typography>
          </Link>
          <Link href={'#'}>
            <Typography color="#fff">
              <LiveHelpIcon /> FAQ
            </Typography>
          </Link>

          <Button
            style={{
              textTransform: 'capitalize',
              backgroundColor: '#eee',
              color: '#333',
              borderRadius: 20,
              padding: 5,
              width: 150,
            }}
            onClick={toggleModal}
          >
            Create Proposal
          </Button>
        </Box>
      </Box>
      <Box p={2.5} pt={0}>
        <Divider sx={{ bgcolor: '#999' }} />
      </Box>

      <Box p={2.5} pt={0} display={'flex'} justifyContent={'space-between'}>
        <Box flex={1}>
          <SearchBarMenu menuItems={menuItems} />
        </Box>

        <OutlinedInput
          placeholder="Search proposals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // variant="outlined"
          sx={{
            borderRadius: 100,
            borderColor: '#fff',
            borderWidth: 2,
            color: '#fff',
            bgcolor: '#34394b',
            flex: 1,
            height: 45,
          }}
        />
      </Box>

      <Box padding={2.5} gap={2} display={'flex'} flexDirection={'column'}>
        {/* <ProposalAccordion title={'Algorand Hackathon Event in Abuja'} /> */}
        {filterProposals().map((proposal) => (
          <ProposalAccordion 
            proposal={proposal} 
            key={proposal.id} 
            typedClient={typedClient} 
            refresh={fetchAllProposals}
          />
        ))}
      </Box>
      <ProposalModal toggle={toggleModal} open={open} typedClient={typedClient} />
    </Box>
  )
}

export default Stake
