import React, { useState } from 'react';
import { Container, CartMovieList, CartMovieItem } from './styles';
import Button from '../Button';
import Sum from '../../assets/sum.png';
import Less from '../../assets/less.png';
import Trash from '../../assets/trash.png';
import OrderConfirmation from '../OrderConfirmation';

type Movie = {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
};

type CartItemProps = {
    cartItems: Movie[];
};

export const CartItem: React.FC<CartItemProps> = ({ cartItems = [] }) => {
    const [cart, setCart] = useState<Movie[]>(cartItems);
    const [compraFinalizada, setCompraFinalizada] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const onIncrease = (movieId: number) => {
        setCart((prevCart) => {
            return prevCart.map((item) =>
                item.id === movieId ? { ...item, quantity: item.quantity + 1 } : item
            );
        });
    };

    const onDecrease = (movieId: number) => {
        setCart((prevCart) => {
            return prevCart.map((item) =>
                item.id === movieId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const onRemove = (movieId: number) => {
        setCart((prevCart) => prevCart.filter((movie) => movie.id !== movieId));
    };

    const finalizarPedido = () => {
        setCompraFinalizada(true);
    };

    if (compraFinalizada) {
        return <OrderConfirmation />;
    }

    return (
        <Container>
            <div className='title'>
                <p>Products</p>
                <p>Amount</p>
                <p>Subtotal</p>
            </div>

            <CartMovieList>
                {cartItems.map((item) => (
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
                                    <img src={Less} alt="Diminuir quantidade" />
                                </button>
                                <div className="count">{item.quantity}</div>
                                <button onClick={() => onIncrease(item.id)}>
                                    <img src={Sum} alt="Aumentar quantidade" />
                                </button>
                            </div>

                            <div className="subtotal-container">
                                <div className="subtotal-label">SUBTOTAL</div>
                                <div className="subtotal">R$ {(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                            <button className="trash-button" onClick={() => onRemove(item.id)}>
                                <img src={Trash} alt="Excluir item" />
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
    );
};
