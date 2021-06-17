import React, { useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChartBox";

import { Container, Content } from "./styles";
import { months } from "../../repositories/moths";
import { years } from "../../repositories/years";

import { format } from "date-fns";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import anxiousImg from "../../assets/anxious.png";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import { useMemo } from "react";

interface IPrevData {
  description: string;
  amount: string;
  frequency: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const newDateMonth = format(new Date(), "MM");
  const newDateYear = format(new Date(), "yyyy");

  const [selectedMonth, setSelectedMonth] = useState<string>(newDateMonth);
  const [selectedYear, setSelectedYear] = useState<string>(newDateYear);

  const filterDateByMonthAndYear = (
    list: Array<IPrevData>
  ): Array<IPrevData> => {
    const filteredData = list.filter((item) => {
      const dateMonth = format(new Date(item.date), "MM");
      const dateYear = format(new Date(item.date), "yyyy");
      return dateMonth === selectedMonth && dateYear === selectedYear;
    });
    return filteredData;
  };

  const calcAmount = (total: number, item: IPrevData) => {
    return total + Number(item.amount);
  };

  const totalExpenses = useMemo(() => {
    const data = filterDateByMonthAndYear(expenses);
    return data.reduce(calcAmount, 0);
  }, [selectedMonth, selectedYear]);

  const totalGains = useMemo(() => {
    const data = filterDateByMonthAndYear(gains);
    return data.reduce(calcAmount, 0);
  }, [selectedMonth, selectedYear]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const gainsPercent = ((totalGains / total) * 100).toFixed(1);
    const expensesPercent = ((totalExpenses / total) * 100).toFixed(1);

    return [
      { name: "Entradas", value: Number(gainsPercent), color: "#03BB85" },
      { name: "Saídas", value: Number(expensesPercent), color: "#ff5555" },
    ];
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance > 0) {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva",
        footerText: "Continue assim e considere investir seu saldo",
        icon: happyImg,
      };
    } else if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Nesse mês você gastou mais do que deveria",
        footerText: "Considere rever seus gastos",
        icon: sadImg,
      };
    } else {
      return {
        title: "Ufa, essa foi na trave!",
        description: "Seus gastos e ganhos foram equivalentes",
        footerText: "Busque formas de diminuir seus gastos",
        icon: anxiousImg,
      };
    }
  }, [totalBalance]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#6272a4">
        <SelectInput
          options={months}
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
        />
        <SelectInput
          options={years}
          onChange={(e) => setSelectedYear(e.target.value)}
          value={selectedYear}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          title="Saldo"
          amount={totalBalance}
          footerLabel="atualizado com base nas últimas movimentações"
          icon="dolar"
          color="#3B5998"
        />

        <WalletBox
          title="Entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas últimas movimentações"
          icon="arrow-up"
          color="#03BB85"
        />

        <WalletBox
          title="Saídas"
          amount={totalExpenses}
          footerLabel="atualizado com base nas últimas movimentações"
          icon="arrow-down"
          color="#ff5555"
        />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

        <PieChartBox data={relationExpensesVersusGains} />
      </Content>
    </Container>
  );
};

export default Dashboard;
