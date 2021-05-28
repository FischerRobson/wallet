import React from "react";
import SelectInput from "../SelectInput";
import { Container, Title, Controllers } from "./styles";

interface IContentHeader {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeader> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <Title lineColor={lineColor}>
        <h1>{title}</h1>
      </Title>
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
