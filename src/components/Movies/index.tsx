import { Container, MovieList, MovieItem } from './styles';
import Button from '../Button'
import CartIcon from '../../assets/Cart-icon.png'

const Movies: React.FC = () => {

    const movies = [
        {
            id: 1,
            title: 'Viúva Negra',
            price: 9.99,
            image: 'https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png'
        },
        {
            id: 2,
            title: 'Shang-chi',
            price: 30.99,
            image: 'https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png'
        },
        {
            id: 3,
            title: 'Homem Aranha',
            price: 29.99,
            image: 'https://wefit-react-web-test.s3.amazonaws.com/spider-man.png'
        },
        {
            id: 5,
            title: 'Morbius',
            price: 9.99,
            image: 'https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png'
        },
        {
            id: 6,
            title: 'Batman',
            price: 29.99,
            image: 'https://wefit-react-web-test.s3.amazonaws.com/the-batman.png'
        },
        {
            id: 4,
            title: 'Eternos',
            price: 30.99,
            image: 'https://wefit-react-web-test.s3.amazonaws.com/eternals.png'
        }
    ];
    

    return (
        <Container>
            <MovieList>
                {movies.map(item => (
                    <MovieItem key={item.id}>
                        <img src={item.image} alt={item.title} className='posterImage'/>
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