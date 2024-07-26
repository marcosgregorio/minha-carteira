import React from "react";
import { Container, FormTitle, Logo, Form } from "./styles";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useAuth } from "../../hooks/auth";

const Signin: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { logged, signIn, signOut } = useAuth();

  const handleSubmit = (): void => {
    signIn(email, password);
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo" />
        <h2>Minha Carteira</h2>
      </Logo>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Entrar</FormTitle>
        <Input type="email" placeholder="E-mail" required onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default Signin;
