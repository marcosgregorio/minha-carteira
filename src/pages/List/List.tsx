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

  const [monthSelected, setMonthSelected] = useState<string | number | undefined>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string | number | undefined>(
    String(new Date().getFullYear())
  );

  const [frequencySelected, setFrequencySelected] = useState(["recorrente", "eventual"]);

  const [reportTableData, setReportTableData] = useState<ReportDataProps[]>([]);
  const theme = useTheme();
  const isEntry = type === "entry";

  const pageProperties = useMemo(() => {
    return isEntry
      ? {
          title: "Entradas",
          underscoreColor: theme.colors.info,
        }
      : { title: "Saidas", underscoreColor: theme.colors.warning };
  }, [isEntry, theme.colors.info, theme.colors.warning]);

  const handleClickFilters = (frequency: string) => {
    const alredySelected = frequencySelected.findIndex((item) => item === frequency);

    if (alredySelected >= 0) {
      const filtered = frequencySelected.filter((item) => item !== frequency);
      setFrequencySelected(filtered);
    } else {
      setFrequencySelected((prev) => [...prev, frequency]);
    }
  };

  useEffect(() => {
    const reportData: ResponseData[] = isEntry ? gains : expenses;
    const filteredData = reportData.filter((data, index) => {
      const date = new Date(data.date ?? "");
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        !monthSelected ||
        !yearSelected ||
        (month === monthSelected &&
          year === yearSelected &&
          frequencySelected.includes(data.frequency))
      );
    });

    const filteredReportData: ReportDataProps[] = filteredData.map((data, index) => {
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
    setReportTableData(filteredReportData);
  }, [isEntry, type, monthSelected, yearSelected, frequencySelected, theme.colors.success, theme.colors.warning]);

  const months = [
    {
      value: 1,
      label: "Janeiro",
    },
    {
      value: 2,
      label: "Fevereiro",
    },
    {
      value: 3,
      label: "Marco",
    },
    {
      value: 4,
      label: "Abril",
    },
    {
      value: 5,
      label: "Maio",
    },
    {
      value: 6,
      label: "Junho",
    },
    {
      value: 7,
      label: "Julho",
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
    {
      value: 2020,
      label: 2020,
    },
  ];

  return (
    <Container>
      <ContentHeader title={pageProperties.title} linecolor={pageProperties.underscoreColor}>
        <SelectInput
          defaultValue={monthSelected}
          onChange={(value) => setMonthSelected(value)}
          options={months}
        />
        <SelectInput
          defaultValue={yearSelected}
          onChange={(newValue) => setYearSelected(newValue)}
          options={years}
        />
        {(!yearSelected || !monthSelected) && <h2>Selecione uma data valida</h2>}
      </ContentHeader>
      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            frequencySelected.includes("recorrente") && "tag-active"
          }`}
          onClick={() => handleClickFilters("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            frequencySelected.includes("eventual") && "tag-active"
          }`}
          onClick={() => handleClickFilters("eventual")}
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        {reportTableData.length > 0 ? (
          reportTableData.map((data) => (
            <HistoryFinanceCard
              key={data.id}
              tagColor={data.tagColor}
              title={data.description}
              subtitle={data.formattedDate}
              amount={formatCurrency(Number(data.amount))}
            />
          ))
        ) : (
          <HistoryFinanceCard
            tagColor={theme.colors.white}
            title="Sem dados financeiros desse periodo filtrado!"
            subtitle=""
            amount=""
          />
        )}
      </Content>
    </Container>
  );
};

export default List;
