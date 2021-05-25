import styled from "styled-components";

export const Container = styled.div`
  grid-area: Aside;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.secondary};
  padding-left: 20px;

  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogoImg = styled.img`
  height: 40px;
  height: 40px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;
  transition: opacity 1s;

  display: flex;
  align-items: center; 

  margin: 7px 0;

  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;
