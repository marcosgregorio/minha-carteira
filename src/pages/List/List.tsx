import React from "react";
import { Container } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import dark from "../../styles/themes/dark";
const List: React.FC = () => {
  const options = [
    {
      value: "Marcola",
      label: "marcola",
    },
    {
      value: "Maria",
      label: "maria",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Entradas" lineColor={dark.colors.warning}>
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default List;
