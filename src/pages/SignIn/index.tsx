import React from "react";
import { Container, Logo, Form, FormTitle } from "./styles";
import LogoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Wallet" />
        <h2>Wallet</h2>
      </Logo>

      <Form>
        <FormTitle>Entrar</FormTitle>

        <Input type="text" placeholder="Digite seu nome de usuário" required />
        <Input type="password" placeholder="Digite sua senha" required />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
