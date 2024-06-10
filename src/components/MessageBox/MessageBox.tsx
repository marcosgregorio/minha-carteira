import { Container } from "./styles";

import happyImg from "../../assets/happy.svg";

export const MessageBox = () => {
  return (
    <Container>
      <header>
        <h1>
          Muito bem!
          <img src={happyImg} alt="" />
        </h1>
      </header>
      <p>Sua carteira esta positiva!</p>
      <footer>
        <span>Continue assim. Considere investir o seu saldo.</span>
      </footer>
    </Container>
  );
};
