import React, { useState, useEffect, useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

interface IListRouteParams {
  match: {
    params: {
      type: string; //definido no routes
    };
  };
}

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IListRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);

  const { type } = match.params;

  const listType = useMemo(() => {
    return type === "entry"
      ? { title: "Entradas", lineColor: "#50fa7b", data: gains }
      : { title: "Saídas", lineColor: "#ff5555", data: expenses };
  }, [type]);

  useEffect(() => {
    const resp = listType.data.map((item) => {
      return {
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: item.frequency === "eventual" ? "#8be9fd" : "#ff5555",
      };
    });
    setData(resp);
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
        {data.map((info, index) => {
          return (
            <HistoryFinanceCard
              key={index}
              tagColor={info.tagColor}
              title={info.description}
              subtitle={info.dateFormatted}
              amount={info.amountFormatted}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default List;
