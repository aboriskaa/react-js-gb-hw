import { useState } from 'react';
import styles from './App.module.scss';
import Chat from './components/Chat/Chat'

function App() {

  const [messageList, setMessageList] = useState([{ author: 'Bot', text: `Можем начать общаться!` }]);

  return (
    <div className={styles.container}>
      <Chat messageList={messageList} setMessageList={setMessageList} />
    </div>
  );
}

export default App;
