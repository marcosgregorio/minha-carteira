import React, { ReactElement } from "react";
import { Container, Controllers, TitleContainer } from "./styles";

type ContentHeaderProps = {
  children: React.ReactNode;
};
export const ContentHeader: React.FC<ContentHeaderProps> = ({ children }) => {
  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controllers>
        <button>botao</button>
        <button>botao</button>
      </Controllers>
    </Container>
  );
};
