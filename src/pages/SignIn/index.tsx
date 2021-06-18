import React, { ReactEventHandler, useState } from "react";
import { Container, Logo, Form, FormTitle } from "./styles";
import LogoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";

const SignIn: React.FC = () => {
  document.title = "Wallet | Sign in";

  const { signIn } = useAuth();

  const [user, setUser] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  // const updateInputValue = (e: React.SyntheticEvent) => {
  //   const { name, value } = e.target as HTMLInputElement;
  // };

  const handleSubmit = () => {
    signIn(user, password);
  };

  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Wallet" />
        <h2>Wallet</h2>
      </Logo>

      <Form onSubmit={() => handleSubmit()}>
        <FormTitle>Entrar</FormTitle>

        <Input
          name="user"
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Digite seu nome de usuário"
          required
        />
        <Input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          isPassword={true}
          placeholder="Digite sua senha"
          required
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
