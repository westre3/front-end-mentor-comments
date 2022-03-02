import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Comment from './components/Comment';
import CommentEditor from './components/CommentEditor';

const theme = createTheme({
  palette: {
    // neutral
    darkBlue: 'hsl(212, 24%, 26%)',
    grayBlue: 'hsl(211, 10%, 45%)',
    lightGray: 'hsl(223, 19%, 93%)',
    veryLightGray: 'hsl(228, 33%, 97%)',
    white: 'hsl(0, 0%, 100%)',

    // primary
    softRed: 'hsl(358, 79%, 66%)',
    moderateBlue: 'hsl(238, 40%, 52%)',
    lightGrayBlue: 'hsl(239, 57%, 85%)',
    paleRed: 'hsl(357, 100%, 86%)',
  },
  typography: {
    fontFamily: "'Rubik', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <div className='container'>
          <Comment
            activeUser={'juliusomo'}
            username={'amyrobson'}
            postDate={'1 month ago'}
            content={
              "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
            }
            score={12}
          />
          <Comment
            activeUser={'juliusomo'}
            username={'maxblagun'}
            postDate={'2 weeks ago'}
            content={
              "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
            }
            score={5}
            replies={[
              {
                id: 1,
                activeUser: 'juliosomo',
                replyingTo: 'maxblagun',
                username: 'ramsesmiron',
                postDate: '1 week ago',
                content:
                  "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                score: 4,
              },
              {
                id: 2,
                activeUser: 'juliusomo',
                replyingTo: 'ramsesmiron',
                username: 'juliusomo',
                postDate: '2 days ago',
                content:
                  "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                score: 2,
              },
            ]}
          />
          <CommentEditor />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
