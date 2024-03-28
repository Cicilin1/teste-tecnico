import { Container } from './styles';
import Button from '../Button';
import Sum from '../../assets/sum.png';
import Less from '../../assets/less.png';
import trash from '../../assets/trash.png';

export const CartItem = () => {
    return (
        <Container>
            <div>
                <p>PRODUTO</p>
                <p>QTD</p>
                <p>SUBTOTAL</p>
            </div>

            <ul>
                <li>
                    <div className="count-container">
                        <div className="Product">
                            <img src="" alt="" />
                            <p> </p>
                        </div>

                        <div className="quantity">
                            <button><img src={Less} alt="" /></button>
                            <div className="count"></div>
                            <button><img src={Sum} alt="" /></button>
                        </div>

                        <div className="subtotal"></div>

                        <button><img src={trash} alt="" /></button>
                    </div>
                </li>
            </ul>

            <div className="Checkout">
                <Button>FINALIZAR PEDIDO</Button>

                <div className="Total">
                    <p>Total</p>
                </div>
            </div>
        </Container>
    );
};