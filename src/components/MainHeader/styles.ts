import styled from "styled-components";

export const Container = styled.div`
  grid-area: MainHeader;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.secondary};
`;
