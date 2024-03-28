import Header from './components/Header';
import { Rout } from './routes';

function App() {
  const itemCount = 0;

  return (
    <>
      <Header itemCount={itemCount} />
      <Rout/>
    </>
  );
}

export default App;