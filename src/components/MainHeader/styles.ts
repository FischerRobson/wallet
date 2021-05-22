import styled from "styled-components";

export const Container = styled.div`
  grid-area: MainHeader;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`
export const Welcome = styled.h3`

`

export const UserName = styled.span`
`