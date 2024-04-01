import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import Vector from '../../assets/Vector.png';

interface HeaderProps {
    itemCount: number;
}

export const Header: React.FC<HeaderProps> = ({ itemCount }) => {
    return (
        <Container>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>WeMovies</h1>
            </Link>
            <div className="CartContainer">
                <Link to="/cart" className="CartContainer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="cartText">
                        <div>Meu Carrinho</div>
                        <p>{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
                    </div>
                    <div className="cartIcon">
                        <img src={Vector} alt="" />
                    </div>
                </Link>
            </div>
        </Container>
    );
};