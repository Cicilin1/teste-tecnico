import Header from './components/Header';
import OrderConfirmation from './components/OrderConfirmation'

function App() {
  const itemCount = 0;

  return (
    <>
      <Header itemCount={itemCount} />
      <OrderConfirmation/>
    </>
  );
}

export default App;