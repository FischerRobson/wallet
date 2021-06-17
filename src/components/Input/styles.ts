import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 5px;
`;

export const PasswordLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.8rem;
  float: right;

  cursor: pointer;

  transition: all .3s;

  &:hover {
    color: ${(props) => props.theme.colors.gray};
  }
`;
