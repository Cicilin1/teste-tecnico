import { Container } from './styles';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    );
}

export default Button;