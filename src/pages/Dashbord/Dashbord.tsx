import React, { useState } from "react";
import { Container } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { useTheme } from "styled-components";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string | number | undefined>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string | number | undefined>(
    String(new Date().getFullYear())
  );
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
      <ContentHeader title="Dashboard" linecolor={`${useTheme().colors.info}`}>
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
        {/* <SelectInput options={options} /> */}
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
