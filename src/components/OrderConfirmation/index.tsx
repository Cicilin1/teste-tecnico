import { Container } from './styles';
import FrameConfirm from '../../assets/Frame-confirm.png';
import Button from '../Button'

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <div className="confirm-message">Compra realizada com sucesso!</div>
      <img src={FrameConfirm} alt="" />
      <Button>Voltar</Button>
    </Container>
  );
};

export default ErrorPage;