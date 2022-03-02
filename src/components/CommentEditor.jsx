import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CommentEditor = () => {
  return (
    <Card variant='outlined'>
      <div className='comment-editor'>
        <Avatar src={require('../images/avatars/image-juliusomo.webp')} />
        <TextField multiline minRows={3} fullWidth placeholder='Add a comment...' />
        <Button variant='contained' size='large' sx={{ backgroundColor: theme => theme.palette.moderateBlue }}>
          Send
        </Button>
      </div>
    </Card>
  );
};

export default CommentEditor;
