import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Reply from '@mui/icons-material/Reply';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import ScoreCounter from './ScoreCounter';
import Badge from './Badge';

const Comment = ({ activeUser, username, postDate, content, score, replies, replyingTo, style }) => {
  const theme = useTheme();
  const owned = activeUser === username;
  console.log(theme);
  let interactions;
  if (owned)
    interactions = (
      <ul className='interactions'>
        <li>
          <Button
            variant='text'
            sx={{ textTransform: 'capitalize', fontWeight: 'bold', color: theme => theme.palette.softRed }}
            className='interaction-button'
            startIcon={<Delete />}>
            Delete
          </Button>
        </li>
        <li>
          <Button
            variant='text'
            sx={{ textTransform: 'capitalize', fontWeight: 'bold', color: theme => theme.palette.moderateBlue }}
            className='interaction-button'
            startIcon={<Edit />}>
            Edit
          </Button>
        </li>
      </ul>
    );
  else
    interactions = (
      <ul className='interactions'>
        <li>
          <Button
            variant='text'
            sx={{ textTransform: 'capitalize', fontWeight: 'bold', color: theme => theme.palette.moderateBlue }}
            className='interaction-button'
            startIcon={<Reply />}>
            Reply
          </Button>
        </li>
      </ul>
    );

  return (
    <>
      <Card variant='outlined' className='comment-grid' sx={style}>
        <ScoreCounter score={score} />
        <div className='comment-info'>
          <Avatar className='avatar' src={require(`../images/avatars/image-${username}.webp`)} />
          <Typography sx={{ fontWeight: 'bold' }}>{username}</Typography>
          {owned && <Badge text={'you'} color={theme.palette.white} backgroundColor={theme.palette.moderateBlue} />}
          <Typography sx={{ fontWeight: 'regular' }}>{postDate}</Typography>
        </div>
        {interactions}
        <Typography className='content'>
          {replyingTo !== undefined && (
            <span style={{ color: theme.palette.moderateBlue, fontWeight: '500' }}>{`@${replyingTo} `}</span>
          )}
          {content}
        </Typography>
      </Card>
      {replies !== undefined && replies.length > 0 && (
        <Stack
          spacing={2}
          sx={{
            position: 'relative',
            '&::before': {
              content: "''",
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '12.5%',
              width: '3px',
              backgroundColor: theme => theme.palette.lightGray,
            },
          }}>
          {replies.map(reply => (
            <Comment
              key={reply.id}
              replyingTo={reply.replyingTo}
              activeUser={reply.activeUser}
              username={reply.username}
              postDate={reply.postDate}
              content={reply.content}
              score={reply.score}
              style={{ width: '75%', alignSelf: 'flex-end' }}
            />
          ))}
        </Stack>
      )}
    </>
  );
};

Comment.propTypes = {
  activeUser: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  replies: PropTypes.array,
  replyingTo: PropTypes.string,
  owned: PropTypes.bool,
  style: PropTypes.object,
};

export default Comment;
