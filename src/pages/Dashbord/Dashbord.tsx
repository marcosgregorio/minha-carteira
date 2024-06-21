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
import { ResponseData } from "../List/List";
import gains from "../../repositories/gains";
import { PieChartGraph } from "../../components/PieChartGraph/PieChartGraph";

const Dashboard: React.FC = () => {
  type selectType = string | number | undefined;

  const [monthSelected, setMonthSelected] = useState<selectType>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<selectType>(
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

  const calculateTotal = (
    monthSelected: selectType,
    yearSelected: selectType,
    report: ResponseData[]
  ) => {
    let total = 0;
    report.forEach((item) => {
      const date = new Date(item.date ?? "");
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error("Invalid amount");
        }
      }
    });
    return total;
  };

  const totalGains = useMemo(() => {
    return calculateTotal(monthSelected, yearSelected, gains);
  }, [monthSelected, yearSelected, gains]);

  const totalExpenses = useMemo(() => {
    return calculateTotal(monthSelected, yearSelected, expenses);
  }, [monthSelected, yearSelected, expenses]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const cardBoxMessages = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste, mes voce gastou mais do que deveria",
        footerText: "Verifique suas contas e tente cortar algumas coisas",
        icon: sadImg,
      };
    } else if (totalBalance === 0) {
      return {
        title: "Ufa!",
        description: "Neste, mes voce gastou exatamente o que deveria",
        footerText: "Verifique suas contas e tente cortar algumas coisas",
        icon: happyImg,
      };
    }

    return {
      title: "Parabéns!",
      description: "Neste, mes voce gastou exatamente o que deveria",
      footerText: "Verifique suas contas e tente cortar algumas coisas",
      icon: happyImg,
    };
  }, [totalBalance]);

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
          amount={totalBalance}
          footerlabel="Atualizado com base nas entradas e saidas"
          icon="dolar"
        />
        <Walletbox
          title="Entradas"
          color="#F7931b"
          amount={totalGains}
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
          title={cardBoxMessages.title}
          description={cardBoxMessages.description}
          footerText={cardBoxMessages.footerText}
          icon={sadImg}
        />
        <PieChartGraph />
      </Content>
    </Container>
  );
};

export default Dashboard;
