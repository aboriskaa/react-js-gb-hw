import styles from './App.module.scss';
import Message from './components/Message/Message'

function App() {

  const mess = "Некая умная фраза..."

  return (
    <div className={styles.container}>
      <div className={styles.containerApp}>Контейнер в компоненте App</div>
      <Message mess={mess} />
    </div>
  );
}

export default App;
