import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: React.CSSProperties; 
}

const Button: React.FC<ButtonProps> = ({ children, style, ...rest }) => {
  return (
    <Container style={style} {...rest}> 
      {children}
    </Container>
  );
};

export default Button;