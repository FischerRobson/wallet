import React from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./styles";

const List: React.FC = () => {
  const options = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
  ];

  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#fff">
        <SelectInput options={options} />
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />{" "}
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />{" "}
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />{" "}
        <HistoryFinanceCard
          tagColor="#fff"
          title="Conta"
          subtitle="29/05/2021"
          amount="250"
        />
      </Content>
    </Container>
  );
};

export default List;
