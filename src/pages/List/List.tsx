import React from "react";
import { Container } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { useTheme } from "styled-components";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard/HistoryFinanceCard";
import Content from "../../components/Content/Content";
const List: React.FC = () => {
  const theme = useTheme();
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
      <ContentHeader title="Entradas" lineColor={theme.colors.warning}>
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          tagColor={theme.colors.warning}
          title="Conta de luz"
          subtitle="21/05/2024"
          amount="399"
        />
      </Content>
    </Container>
  );
};

export default List;
