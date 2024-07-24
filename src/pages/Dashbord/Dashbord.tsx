import React, { useMemo, useState } from "react";
import { Container, Content } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { useTheme } from "styled-components";
import { Walletbox } from "../../components/Walletbox/Walletbox";
import { MessageBox } from "../../components/MessageBox/MessageBox";
import { HistoryBox } from "../../components/HistoryBox/HistoryBox";
import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import expenses from "../../repositories/expenses";
import { ResponseData } from "../List/List";
import gains from "../../repositories/gains";
import { PieChartGraph } from "../../components/PieChartGraph/PieChartGraph";
import listOfMonths from "../../utils/months";
import BarChartBox from "../../components/BarChartBox/BarChartBox";

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

  const historyData = useMemo(() => {
    return listOfMonths
      .map((_, monthIndex) => {
        let amountEntry = 0;
        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();
          if (gainMonth == monthIndex && gainYear === yearSelected) {
            try {
              amountEntry += Number(gain.amount);
            } catch (error) {
              throw new Error(
                "AmountEntry nao pode fazer o casting para Number"
              );
            }
          }
        });

        let amountOutput = 0;
        expenses.forEach((expenses) => {
          const date = new Date(expenses.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();
          if (gainMonth == monthIndex && gainYear === yearSelected) {
            try {
              amountOutput += Number(expenses.amount);
            } catch (error) {
              throw new Error(
                "AmountOutput nao pode fazer o casting para Number"
              );
            }
          }
        });

        const historyBoxData = {
          monthNumber: monthIndex,
          month: listOfMonths[monthIndex].substring(0, 3),
          amountEntry,
          amountOutput,
        };
        return historyBoxData;
      })
      .filter((item) => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          Number(yearSelected) <= currentYear
        );
      });
  }, [yearSelected, gains, expenses]);

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

  const relationExpensesGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentGains = isNaN(totalGains / total)
      ? 0
      : (totalGains / total) * 100;
    const percentExpenses = isNaN(totalExpenses / total)
      ? 0
      : (totalExpenses / total) * 100;

    const obj = [
      {
        name: "Entradas",
        value: totalGains,
        percent: percentGains.toFixed(1),
        color: "#F7931B",
      },
      {
        name: "Saidas",
        value: totalExpenses,
        percent: percentExpenses.toFixed(1),
        color: "#E44C4E",
      },
    ];

    return obj;
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

  const relationExpensesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter((expenses) => {
        const date = new Date(expenses.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach((expenses) => {
        if (expenses.frequency === "recorrente") {
          return (amountEventual += Number(expenses.amount));
        }

        if (expenses.frequency === "eventual") {
          return (amountRecurrent += Number(expenses.amount));
        }
      });
    const total = amountEventual + amountRecurrent;
    const percentRecurrent = Number(
      (isNaN(amountRecurrent / total) ? 0 : amountRecurrent / total) * 100
    ).toFixed(1);
    const percentEventual = Number(
      (isNaN(amountEventual / total) ? 0 : amountEventual / total) * 100
    ).toFixed(1);

    return [
      {
        name: "Recorrente",
        amount: amountRecurrent,
        percent: percentRecurrent,
        color: "#F7931B",
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        percent: percentEventual,
        color: "#E44C4E",
      },
    ];
  }, [yearSelected, monthSelected]);

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
        <PieChartGraph data={relationExpensesGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#F7931b"
          lineColorAmountOutput="#e44c4e"
        />
      </Content>
      <BarChartBox
        data={relationExpensesRecurrentVersusEventual}
        title="Saidas"
      />
    </Container>
  );
};

export default Dashboard;
