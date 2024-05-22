import React from "react";
import { Container, Controllers, TitleContainer } from "./styles";

type ContentHeaderProps = {
  title: string;
  children: React.ReactNode;
  linecolor: string;
};
export const ContentHeader: React.FC<ContentHeaderProps> = ({ title, children, linecolor }) => {
  return (
    <Container>
      <TitleContainer linecolor={linecolor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};
