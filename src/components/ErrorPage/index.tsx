import { Container } from './styles';
import { useNavigate } from 'react-router-dom'; 
import FrameError from '../../assets/Frame-error.png';
import Button from '../Button'

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  };


  return (
    <Container>
      <div className="error-message">Parece que não há nada por aqui :(</div>
      <img src={FrameError} alt="" />
      <Button onClick={goToHome}>Recarregar Página</Button>
    </Container>
  );
};
