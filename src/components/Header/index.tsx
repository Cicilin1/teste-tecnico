import { Container } from './styles'
import Vector from '../../assets/Vector.png'

interface HeaderProps {
    itemCount: number;
}

export const Header: React.FC<HeaderProps> = ({ itemCount }) => {



    return (
        <Container>
            <h1>WeMovies</h1>

            <div className="CartContainer">
                <div className="cartText">
                    <div>Meu Carrinho</div>
                    <p>{itemCount} items</p>
                </div>

                <div className="cartIcon">
                    <img src={Vector} alt="" />
                </div>
            </div>
        </Container>
    );
}

export default Header