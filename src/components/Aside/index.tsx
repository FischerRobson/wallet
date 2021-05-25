import React from "react";
import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";
import logoImg from "../../assets/logo.svg";
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Minha Carteira Logo" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink>
          {" "}
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink>
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
        <MenuItemLink>
          <MdExitToApp />
          Log Out
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
