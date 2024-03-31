import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, MovieList, MovieItem } from "./styles";
import Button from "../Button";
import CartIcon from "../../assets/Cart-icon.png";
import { LoadSpinner } from "../LoadSpinner";
import { ErrorPage } from "../ErrorPage";
import { CartItem } from "../CartItem";

type Movie = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

const MovieListComponent: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [cart, setCart] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("https://wefit-movies.vercel.app/api/movies");
        if (Array.isArray(response.data.products)) {
          setTimeout(() => {
            setMovies(response.data.products.map((movie: Movie) => ({ ...movie, quantity: 0 })));
            setLoading(false);
          }, 800);
        } else {
          console.error("Expected an array of movies, but got:", response.data.products);
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(true);
      }
    };
    getMovies();
  }, []);

  const addToCart = (movie: Movie) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === movie.id);
  
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...movie, quantity: 1 }];
      }
    });
  };
  
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
                    <Button style={{ width: "306.67px", gap: "8px" }} onClick={() => addToCart(movie)}>
                      <img src={CartIcon} alt="" className="Ícone de carrinho" />
                      <div id="count-item">{cart.find((item) => item.id === movie.id)?.quantity || 0}</div>
                      ADICIONAR AO CARRINHO
                    </Button>
                  </MovieItem>
              ))
          )}
        </MovieList>
        <CartItem cartItems={cart} />
      </Container>
  );
};

export default MovieListComponent;
