import React, { useMemo, useState } from "react";
import { Container, Content } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { useTheme } from "styled-components";
import { Walletbox } from "../../components/Walletbox/Walletbox";
import { MessageBox } from "../../components/MessageBox/MessageBox";
import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import expenses from "../../repositories/expenses";

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

  const totalExpenses = useMemo(() => {
      let total = 0;
      expenses.forEach(item => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        debugger
        if (month === monthSelected && year === yearSelected) {
          try {
            total += Number(item.amount);
          } catch (error) {
            throw new Error('Invalid amount');
          }
        }
      })
      return total;
  }, [monthSelected, yearSelected, expenses]);

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
          amount={totalExpenses}
          footerlabel="Atualizado com base nas entradas e saidas"
          icon="arrowDown"
        />
      <MessageBox 
        title="Muito bem!"
        description="Sua carteira esta positiva!"
        footerText="Continue assim. Considere investir no seu saldo!"
        icon={sadImg}
      />
      </Content>
    </Container>
  );
};

export default Dashboard;
