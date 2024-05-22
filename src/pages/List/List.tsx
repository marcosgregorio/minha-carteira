import React from "react";
import { Container, Filters } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { useTheme } from "styled-components";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard/HistoryFinanceCard";
import Content from "../../components/Content/Content";
const List: React.FC = () => {
  const theme = useTheme();
  const months = [
    {
      value: 7,
      label: "Junho",
    },
    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
  ];
  const years = [
    {
      value: 2024,
      label: 2024,
    },
    {
      value: 2023,
      label: 2023,
    },
    {
      value: 2022,
      label: 2022,
    },
  ];

  return (
    <Container>
      <ContentHeader title="Entradas" lineColor={theme.colors.warning}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>
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
