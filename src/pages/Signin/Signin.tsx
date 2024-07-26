import React from "react";
import { Container, FormTitle, Logo, Form } from "./styles";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

const Signin: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo" />
        <h2>Minha Carteira</h2>
      </Logo>
      <Form onSubmit={() => console.log("Submit")}>
        <FormTitle>Entrar</FormTitle>
        <Input type="email" placeholder="E-mail"  required/>
        <Input type="password" placeholder="Senha" required/>
        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default Signin;
