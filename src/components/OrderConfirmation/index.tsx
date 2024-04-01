import { Container } from './styles';
import { useNavigate } from 'react-router-dom'; 
import FrameConfirm from '../../assets/Frame-confirm.png';
import Button from '../Button';
import { useCart } from '../../hooks/cart';

export const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const goToHome = () => {
    clearCart();
    navigate("/");
  };
  
  return (
    <Container>
      <div className="confirm-message">Compra realizada com sucesso!</div>
      <img src={FrameConfirm} alt="Confirmação da compra: Pessoa mostrando confirmação da compra"/>
      <Button onClick={goToHome}>Voltar</Button>
    </Container>
  );
};
