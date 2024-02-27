<<<<<<< HEAD


import { Box, Button, Typography } from '@mui/material';
import TelegramIcon from '/src/assets/Group.svg';

const GovernanceBot = () => {
  return (
    <Box
      className="flex justify-center items-center"
      bgcolor="#2A84EE"
      p={4}
    >
=======
import { Box, Button, Typography } from '@mui/material'
import TelegramIcon from '/src/assets/Group.svg'

const GovernanceBot = () => {
  return (
    <Box className="flex justify-center items-center" bgcolor="#2A84EE" p={4}>
>>>>>>> master
      <Box mr={4}>
        <img src={TelegramIcon} alt="telegram" width={90} />
      </Box>
      <Box textAlign="center">
        <Typography variant="h4" fontWeight="bold" pb={2}>
          Governance notification bot
        </Typography>
        <Typography variant="body1" color="#F0F0F0">
          Stay up to speed with DaoWakanda governance developments
        </Typography>
      </Box>
      <Box ml={4}>
        <Button variant="contained" color="primary" size="large">
          Get notified
        </Button>
      </Box>
    </Box>
<<<<<<< HEAD
  );
};

export default GovernanceBot;
=======
  )
}

export default GovernanceBot
>>>>>>> master
