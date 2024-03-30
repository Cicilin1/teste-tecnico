import { Container } from './styles';
import { useNavigate } from 'react-router-dom'; 
import FrameConfirm from '../../assets/Frame-confirm.png';
import Button from '../Button'

const ErrorPage: React.FC = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  };

  return (
    <Container>
      <div className="confirm-message">Compra realizada com sucesso!</div>
      <img src={FrameConfirm} alt="Confirmação da compra: Pessoa mostrando confirmação da compra"/>
      <Button onClick={goToHome}>Voltar</Button>
    </Container>
  );
};

export default ErrorPage;