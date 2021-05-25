import React from "react";
import { Container, Title, Controllers } from "./styles";

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Título</h1>
      </Title>
      <Controllers>
          <button>teste</button>
          <button>teste</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
