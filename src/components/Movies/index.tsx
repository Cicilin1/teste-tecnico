import { Container, MovieList, MovieItem } from './styles';
import { useState } from 'react';
import Button from '../Button'
import CartIcon from '../../assets/Cart-icon.png'

const Movies: React.FC = () => {

    const [apiMovies, setApiMovies] = useState();

    useEffect(() => {
        async function getMovies() {
            const data = await apiMovies();
            setApiMovies(data);
        }

        getMovies();
    }, []);



    return (
        <Container>

            <div>
                {apiMovies ? (
                    apiMovies.map((movie) => (
                        <>
                            <ProjectList title={movie.name} description={movie.description} lang={movie.language} link={movie.html_url} key={movie.id} />
                        </>
                    ))
                ) : (
                    <div>
                        <h2 className="text-center">Erro na requisição dos projetos</h2>
                        <Link href="https://github.com/danilobarretoooo?tab=repositories" target="_blank">Clique aqui para visualizar meus projetos</Link>
                    </div>
                )}
            </div>



            <MovieList>
                {movies.map(item => (
                    <MovieItem key={item.id}>
                        <img src={item.image} alt={item.title} className='posterImage' />
                        <h3>{item.title}</h3>
                        <p>R$ {item.price}</p>
                        <Button><img src={CartIcon} alt="" className='CartIcon' />0  ADICIONAR AO CARRINHO</Button>
                    </MovieItem>
                ))}
            </MovieList>
        </Container>
    );
};

export default Movies;