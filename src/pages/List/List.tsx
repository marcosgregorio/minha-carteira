import React, { useEffect, useMemo, useState } from "react";
import { Container, Filters } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { useTheme } from "styled-components";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard/HistoryFinanceCard";
import Content from "../../components/Content/Content";
import { useParams } from "react-router-dom";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import { formatCurrency } from "../../utils/formatCurrency";

type ListProps = {};
interface ResponseData {
  description: string;
  amount: number | string;
  frequency: "eventual" | "recorrente" | string;
  date?: string;
}
interface ReportDataProps extends ResponseData {
  id: number;
  formattedDate: string;
  tagColor: string;
}
const List: React.FC<ListProps> = () => {
  const { type } = useParams();

  const [reportTableData, setReportTableData] = useState<ReportDataProps[]>([]);
  const theme = useTheme();
  const isEntry = type === "entry";

  const pageProperties = useMemo(() => {
    return isEntry
      ? {
          title: "Entradas",
          underscoreColor: theme.colors.success,
        }
      : { title: "Saidas", underscoreColor: theme.colors.warning };
  }, [type]);

  useEffect(() => {
    const reportData: ResponseData[] = isEntry ? gains : expenses;
    const filteredData: ReportDataProps[] = reportData.map((data, index) => {
      const formattedDate = data.date?.split("-").reverse().join("/") ?? "";
      const tagColor = data.frequency === "eventual" ? theme.colors.success : theme.colors.warning;
      return {
        id: index,
        description: data.description,
        amount: data.amount,
        frequency: data.frequency,
        formattedDate,
        tagColor: tagColor,
      };
    });
    setReportTableData(filteredData);
  }, [type]);

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
      <ContentHeader title={pageProperties.title} linecolor={pageProperties.underscoreColor}>
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
        {reportTableData.map((data) => (
          <HistoryFinanceCard
            key={data.id}
            tagColor={data.tagColor}
            title={data.description}
            subtitle={data.formattedDate}
            amount={formatCurrency(Number(data.amount))}
          />
        ))}
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
