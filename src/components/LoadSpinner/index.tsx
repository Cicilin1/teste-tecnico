import { Container, Load } from './styles';
import LoadSpinnerImg from '../../assets/load-spinner.png';

const LoadSpinner: React.FC = () => {
    return (
        <Container>
            <Load>
                <img src={LoadSpinnerImg} alt="Loading" />
            </Load>
        </Container>
    );
};

export default LoadSpinner;