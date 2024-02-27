import { Box, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

interface Props {
  yesPercentage?: number;
  noPercentage ?: number;
  yesVote?: boolean;
  noVote?: boolean;
  onVote?: (type: 'yes' | 'no') => void;
}

export default function VotingRadio({
  yesPercentage = 30,
  noPercentage = 70,
  yesVote = false,
  noVote = false,
  onVote,
}: Props) {
  return (
    <FormControl sx={{ width: '100%' }}>
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
        <Box flex={1} bgcolor={'#444'} display={'flex'} justifyContent={'space-between'} pr={3}>
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  color: '#fff',
                  '&.Mui-checked': {
                    color: '#eee',
                  },
                }}
                onChange={(event) => onVote?.('yes')}
                disabled={noVote}
              />
            }
            label={'Yes'}
            sx={{
              width: `${yesPercentage}%`,
              color: '#fff',
              backgroundColor: '#273010',
            }}
          />
          <Typography color={'white'} fontWeight={'bold'} mt={1}>
            {yesPercentage}%
          </Typography>
        </Box>

        <Box flex={1} bgcolor={'#444'} display={'flex'} justifyContent={'space-between'} pr={2}>
          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  color: '#fff',
                  '&.Mui-checked': {
                    color: '#eee',
                  },
                }}
                onChange={(event) => onVote?.('no')}
                disabled={yesVote}
              />
            }
            label={'No'}
            sx={{
              width: `${noPercentage}%`,
              color: '#fff',
              backgroundColor: '#273010',
            }}
          />
          <Typography color={'white'} fontWeight={'bold'} mt={1}>
            {noPercentage}%
          </Typography>
        </Box>
      </RadioGroup>
    </FormControl>
  )
}
