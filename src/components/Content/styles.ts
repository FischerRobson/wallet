import styled from "styled-components";

export const Container = styled.div`
  grid-area: Content;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};

  padding: 25px;
`;
