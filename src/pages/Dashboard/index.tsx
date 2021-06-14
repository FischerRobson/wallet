import React, { useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./styles";
import { months } from "../../repositories/moths";
import { years } from "../../repositories/years";
import { format } from "date-fns";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import WalletBox from "../../components/WalletBox";

const Dashboard: React.FC = () => {
  const newDateMonth = format(new Date(), "MM");
  const newDateYear = format(new Date(), "yyyy");

  const [selectedMonth, setSelectedMonth] = useState<string>(newDateMonth);
  const [selectedYear, setSelectedYear] = useState<string>(newDateYear);

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
          amount={1560}
          footerLabel="atualizado com base nas últimas movimentações"
          icon="dolar"
          color="#3B5998"
        />

        <WalletBox
          title="Entradas"
          amount={2450.0}
          footerLabel="atualizado com base nas últimas movimentações"
          icon="arrow-up"
          color="#03BB85"
        />

        <WalletBox
          title="Saídas"
          amount={950.0}
          footerLabel="atualizado com base nas últimas movimentações"
          icon="arrow-down"
          color="#ff5555"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
