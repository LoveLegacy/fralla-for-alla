import styled from "styled-components";
import Colors from "../../styles/Colors";

interface ButtonProps {
  backgroundColor: string;
  textColor: string;
}

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  padding: 0.5rem;
`;

export default Button;
