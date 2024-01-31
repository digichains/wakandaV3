import React from 'react';
import moment from 'moment'; // Import Moment.js
import { Box, Card, Divider, Typography } from '@mui/material';


interface RowProps {
  title: string;
  value: string | number;
}

interface VoterInfoProps {
  created_on: string;
  end_time: string;
  total_votes: number;
}

const Row: React.FC<RowProps> = ({ title, value }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'}>
      <Typography color={'#fff'} mt={1}>
        {title}
      </Typography>
      <Typography color={'#fff'} mt={1}>
        {value}
      </Typography>
    </Box>
  );
};

const VoterInfo = ({ created_on, end_time, total_votes }: VoterInfoProps) => {
  const voteInfo = [
    { columnName: 'Author', value: 'Tom' },
    { columnName: 'Start Date', value: moment(created_on).format('DD/MM/YYYY') },
    { columnName: 'End Date', value: moment(end_time).format('DD/MM/YYYY') },
    { columnName: 'Total votes', value: total_votes },
    { columnName: 'Algo Amounts', value: (0.2 * total_votes).toFixed(4) },
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%', minHeight: 200, bgcolor: '#292f28', padding: 2 }}>
      <Typography variant="h6" fontWeight={'bold'} color={'#fff'} textAlign={'center'}>
        Vote Information
      </Typography>
      {voteInfo.map((item, index) => (
        <Box key={`vote-info-row${index}`}>
          <Row title={item.columnName} value={item.value} />
          <Divider sx={{ bgcolor: '#eee' }} />
        </Box>
      ))}
    </Card>
  );
};

export default VoterInfo;
