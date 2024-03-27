import { Container } from './styles';
import FrameError from '../../assets/Frame-error.png';
import Button from '../Button'

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <div className="error-message">Parece que não há nada por aqui :(</div>
      <img src={FrameError} alt="" />
      <Button>Recarregar Página</Button>
    </Container>
  );
};

export default ErrorPage;