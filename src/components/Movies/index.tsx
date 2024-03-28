import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./styles";
import Button from "../Button";
import CartIcon from "../../assets/Cart-icon.png";
import { LoadSpinner } from "../../components/LoadSpinner";

type Movie = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('https://wefit-movies.vercel.app/api/movies');
        if (Array.isArray(response.data.products)) {
          setTimeout(() => {
            setMovies(response.data.products);
            setLoading(false);
          }, 800);
        } else {
          console.error("Expected an array of movies, but got:", response.data.products);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getMovies();
  }, []);


  return (
    <Container>
      {loading ? <LoadSpinner/> : movies.map((movie) => ( 
        <div key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.price}</p>
          <Button>
            <img src={CartIcon} alt="" className="CartIcon" />
            0 ADICIONAR AO CARRINHO
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default MovieList;