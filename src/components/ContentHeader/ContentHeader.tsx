import React, { ReactElement } from "react";
import { Container, Controllers, TitleContainer } from "./styles";
import { SelectInput } from "../SelectInput/SelectInput";

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
