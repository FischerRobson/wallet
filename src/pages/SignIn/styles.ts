import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > h2 {
    color: ${(props) => props.theme.colors.white};
    margin-left: 7px;
  }

  > img {
    width: 45px;
    height: 45px;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 30px;
  border-radius: 10px;

  > button{
      margin-top: 28px;
  }
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};

  margin-bottom: 28px;

  &:after {
    content: "";
    width: 55px;
    display: block;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }
`;
