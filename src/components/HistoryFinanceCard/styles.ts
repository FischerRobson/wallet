import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background: ${(props) => props.theme.colors.black};
  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;

    span {
      font-weight: bold;
      font-size: 1.3rem;
    }
  }

  
`;

export const Tag = styled.div<ITagProps>`
  background: ${(props) => props.color};
  position: absolute;
  width: 10px;
  height: 60%;
  left: 0;
`;
