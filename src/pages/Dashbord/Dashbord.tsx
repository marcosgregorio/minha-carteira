import React, { useState } from "react";
import { Container, Content } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { useTheme } from "styled-components";
import { Walletbox } from "../../components/Walletbox/Walletbox";

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
      </ContentHeader>
      <Content>
        <Walletbox
          title="Saldo"
          color="#4E41F0"
          amount={150}
          footerlabel="Atualizado com base nas entradas e saidas"
          icon="dolar"
        />
        <Walletbox
          title="Entradas"
          color="#F7931b"
          amount={5000}
          footerlabel="Atualizado com base nas entradas e saidas"
          icon="arrowUp"
        />
        <Walletbox
          title="Saidas"
          color="#e44c4e"
          amount={4850}
          footerlabel="Atualizado com base nas entradas e saidas"
          icon="arrowDown"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
