import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, MovieItem, MovieList } from "./styles";
import Button from "../Button";
import CartIcon from "../../assets/icons/Cart-icon.png";
import { LoadSpinner } from "../../components/LoadSpinner";
import { ErrorPage } from "../ErrorPage"

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

  // const [cartItems, setCartItems] = useState<{ movie: Movie; quantity: number }[]>([]);   implementação da lógica do carrinho

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          "https://wefit-movies.vercel.app/api/movies"
        );
        if (Array.isArray(response.data.products)) {
          setTimeout(() => {
            setMovies(response.data.products);
            setLoading(false);
          }, 800);
        } else {
          console.error(
            "Expected an array of movies, but got:",
            response.data.products
          );
          setError(true); 
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(true);
      }
    };
    getMovies();
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
              <p> R$ {movie.price}</p>
              <Button style={{ width: '306.67px', gap: '8px'}}>
                <img src={CartIcon} alt="" className="CartIcon" />
                <div id='count-item'>0</div>
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