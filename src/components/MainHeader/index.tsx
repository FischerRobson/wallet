import React from "react";
import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  return (
    <Container>
      <h1>toggle</h1>
      <Profile>
        <Welcome>Olá</Welcome>
        <UserName>Robson Fischer 2</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
