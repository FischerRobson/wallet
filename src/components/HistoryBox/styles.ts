import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 340px;
  margin: 10px 0;
  background: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  border-radius: 7px;
  padding: 30px 30px;

  > h2 {
    margin-bottom: 10px;
  }
`;
