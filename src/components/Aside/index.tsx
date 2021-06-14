import React, { useEffect } from "react";
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
import { useHistory } from "react-router-dom";
import {FaWallet} from 'react-icons/fa'

const Aside: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        {/* <LogoImg src={logoImg} alt="Minha Carteira Logo" /> */}
        <FaWallet size={24} style={{marginRight: "15px"}}/>
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink onClick={() => history.push("/")}>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink onClick={() => history.push("/list/entry")}>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink onClick={() => history.push("/list/exit")}>
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
