import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, MovieList, MovieItem } from "./styles";
import Button from "../Button";
import CartIcon from "../../assets/Cart-icon.png";
import { LoadSpinner } from "../LoadSpinner";
import { ErrorPage } from "../ErrorPage";
import { useCart } from "../../hooks/cart";

type Movie = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const MovieListComponent: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { addToCart, cart } = useCart();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://wefit-movies.vercel.app/api/movies");
        if (Array.isArray(response.data.products)) {
          setTimeout(() => {
            setMovies(response.data.products);
            setLoading(false);
          }, 800);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchMovies();
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Container>
      <MovieList>
        {loading ? (
          <LoadSpinner />
        ) : (
          movies.map((movie) => (
            <MovieItem key={movie.id}>
              <img src={movie.image} alt={movie.title} className="posterImage" />
              <h3>{movie.title}</h3>
              <p>R$ {movie.price}</p>
              <Button
                style={{ width: "306.67px", gap: "8px" }}
                onClick={() => {
                  const existingItemIndex = cart.findIndex((item) => item.id === movie.id);
                  if (existingItemIndex !== -1) {
                    const updatedCart = [...cart];
                    updatedCart[existingItemIndex].quantity += 1;
                    addToCart(updatedCart);
                  } else {
                    addToCart([...cart, { ...movie, quantity: 1 }]);
                  }
                }}
              >
                <img src={CartIcon} alt="" className="Ícone de carrinho" />
                <div id="count-item">
                  {cart.find((item) => item.id === movie.id)?.quantity || 0}
                </div>
                ADICIONAR AO CARRINHO
              </Button>
            </MovieItem>
          ))
        )}
      </MovieList>
    </Container>
  );
};

export default MovieListComponent;
