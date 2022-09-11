import { useState } from 'react';
import Chat from './components/Chat/Chat'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function App() {

  const [messageList, setMessageList] = useState([{ author: 'Bot', text: `Можем начать общаться!` }]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Chat
        </Typography>
        <Box>
          <Chat messageList={messageList} setMessageList={setMessageList} />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
