import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

const ScoreCounter = ({ score }) => {
  const theme = useTheme();
  return (
    <div className='score-counter' style={{ backgroundColor: theme.palette.lightGray }}>
      <IconButton aria-label='like comment'>
        <Add sx={{ color: theme => theme.palette.lightGrayBlue }} />
      </IconButton>
      <Typography sx={{ color: theme => theme.palette.moderateBlue, fontWeight: 'medium' }}>{score}</Typography>
      <IconButton aria-label='dislike comment'>
        <Remove sx={{ color: theme => theme.palette.lightGrayBlue }} />
      </IconButton>
    </div>
  );
};

ScoreCounter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreCounter;
