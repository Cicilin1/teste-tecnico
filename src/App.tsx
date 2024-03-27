import Header from './components/Header';
import Movies from './components/Movies'

function App() {
  const itemCount = 0;

  return (
    <>
      <Header itemCount={itemCount} />
      <Movies/>
    </>
  );
}

export default App;