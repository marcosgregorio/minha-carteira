import { Container, ToogleLabel, ToogleSelector } from "./styles";
import Switch from "react-switch";

export const Toogle: React.FC = () => {
  return (
    <Container>
      <ToogleLabel>light</ToogleLabel>
      <ToogleSelector checked={false} onChange={() => console.log("ola")} />
      <ToogleLabel>dark</ToogleLabel>
    </Container>
  );
};
