import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Badge = ({ text, color, backgroundColor }) => {
  return (
    <div className='badge' style={{ backgroundColor }}>
      <Typography sx={{ color, fontWeight: '500' }}>{text}</Typography>
    </div>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Badge;
