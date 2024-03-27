import Header from './components/Header';
import ErrorPage from './components/ErrorPage'

function App() {
  const itemCount = 0;

  return (
    <>
      <Header itemCount={itemCount} />
      <ErrorPage/>
    </>
  );
}

export default App;