import React, { useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";

interface IListRouteParams {
  match: {
    params: {
      type: string; //definido no routes
    };
  };
}

const List: React.FC<IListRouteParams> = ({ match }) => {
  const { type } = match.params;

  const listType = useMemo(() => {
    return type === "entry"
      ? { title: "Entradas", lineColor: "#50fa7b" }
      : { title: "Saídas", lineColor: "#ff5555" };
  }, [type]);

  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
  ];

  const years = [
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
  ];

  return (
    <Container>
      <ContentHeader title={listType.title} lineColor={listType.lineColor}>
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
