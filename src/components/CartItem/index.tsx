import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CartMovieList, CartMovieItem } from './styles';
import Button from '../Button';
import Sum from '../../assets/sum.png';
import Less from '../../assets/less.png';
import Trash from '../../assets/trash.png';
import { OrderConfirmation } from '../OrderConfirmation';
import { useCart } from '../../hooks/cart';

export const CartItem: React.FC = () => {
    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const { cart, addToCart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/error');
        }
    }, [cart, navigate]);

    const onIncrease = (movieId: number) => {
        addToCart(prevCart =>
            prevCart.map(item =>
                item.id === movieId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    
    const onDecrease = (movieId: number) => {
        addToCart(prevCart =>
            prevCart.map(item =>
                item.id === movieId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };
    
    const onRemove = (movieId: number) => {
        addToCart(prevCart => prevCart.filter(movie => movie.id !== movieId));
    };

    const finalizarPedido = () => {
        setCompraFinalizada(true);
    };

    return (
        <>
            {!compraFinalizada && (
                <Container>
                    <div className='title'>
                        <p>Products</p>
                        <p>QTD</p>
                        <p>Subtotal</p>
                    </div>

                    <CartMovieList>
                        {cart.map((item) => (
                            <CartMovieItem key={item.id}>
                                <div className="product-container">
                                    <div className="product">
                                        <img src={item.image} alt={item.title} />
                                        <div className="product-details">
                                            <p>{item.title}</p>
                                            <p>R$ {item.price.toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <div className="quantity">
                                        <button onClick={() => onDecrease(item.id)}>
                                            <img src={Less} alt="Decrease quantity" />
                                        </button>
                                        <div className="count">{item.quantity}</div>
                                        <button onClick={() => onIncrease(item.id)}>
                                            <img src={Sum} alt="Increase quantity" />
                                        </button>
                                    </div>

                                    <div className="subtotal-container">
                                        <div className="subtotal-label">SUBTOTAL</div>
                                        <div className="subtotal">R$ {(item.price * item.quantity).toFixed(2)}</div>
                                    </div>
                                    <button className="trash-button" onClick={() => onRemove(item.id)}>
                                        <img src={Trash} alt="Remove item" />
                                    </button>
                                </div>
                            </CartMovieItem>
                        ))}
                    </CartMovieList>

                    <div className="checkout">
                        <Button style={{ fontWeight: "700", width: "173px", height: "34px", fontSize: "12px" }} onClick={finalizarPedido}>
                            FINALIZAR PEDIDO
                        </Button>

                        <div className="total-container">
                            <p>TOTAL</p>
                            <p id="total">R$ {total.toFixed(2)}</p>
                        </div>
                    </div>
                </Container>
            )}
            {compraFinalizada && <OrderConfirmation />}
        </>
    );
};
