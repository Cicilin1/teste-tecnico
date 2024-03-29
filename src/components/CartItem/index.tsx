import { Container, CartMovieList, CartMovieItem } from './styles';
import Button from '../Button';
import Sum from '../../assets/sum.png';
import Less from '../../assets/less.png';
import trash from '../../assets/trash.png';
import Spider from '../../assets/spider.png'

export const CartItem = () => {
    return (
        <Container>
            <div className='title'>
                <p>PRODUTO</p>
                <p>QTD</p>
                <p>SUBTOTAL</p>
            </div>

            <CartMovieList>
                <CartMovieItem>
                    <div className="product-container">
                        <div className="product">
                            <img src={Spider} alt="" />
                            <div className="product-details">
                                <p>Homem aranha</p>
                                <p>R$ 29,99</p>
                            </div>
                        </div>

                        <div className="quantity">
                            <button><img src={Less} alt="" /></button>
                            <div className="count">1</div>
                            <button><img src={Sum} alt="" /></button>
                        </div>

                        <div className="subtotal-container">
                            <div className="subtotal-label">SUBTOTAL</div>
                            <div className="subtotal">R$ 29,99</div>
                        </div>
                        <button className="trash-button"><img src={trash} alt="" /></button>
                    </div>
                </CartMovieItem>
            </CartMovieList>

            <div className="checkout">
                <Button style={{fontWeight: "700",width: "173px", height: "34px",fontSize:"12px",}}>FINALIZAR PEDIDO</Button>

                <div className="total-container">
                    <p>TOTAL</p>
                    <p id="total">R$ 29,99</p>
                </div>
            </div>
        </Container>
    );
};