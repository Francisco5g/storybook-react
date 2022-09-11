import { ButtonContainer } from "./styles";

function Button({ children }: WithChildren) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default Button;
