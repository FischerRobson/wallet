import React, { useState, useEffect, useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import { format } from "date-fns";
import { months } from "../../repositories/moths";
import { years } from "../../repositories/years";

interface IListRouteParams {
  match: {
    params: {
      type: string; //definido no routes
    };
  };
}

interface IPrevData {
  description: string;
  amount: string;
  frequency: string;
  date: string;
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

  const newDateMonth = format(new Date(), "MM");
  const newDateYear = format(new Date(), "yyyy");

  const [selectedMonth, setSelectedMonth] = useState<string>(newDateMonth);
  const [selectedYear, setSelectedYear] = useState<string>(newDateYear);

  const { type } = match.params;

  const listType = useMemo(() => {
    return type === "entry"
      ? { title: "Entradas", lineColor: "#50fa7b", data: gains }
      : { title: "Saídas", lineColor: "#ff5555", data: expenses };
  }, [type]);

  const filterDateByMonthAndYear = (
    list: Array<IPrevData>
  ): Array<IPrevData> => {
    const filteredDate = list.filter((item) => {
      const dateMonth = format(new Date(item.date), "MM");
      const dateYear = format(new Date(item.date), "yyyy");
      return dateMonth === selectedMonth && dateYear === selectedYear;
    });
    return filteredDate;
  };

  const formatData = (list: Array<IPrevData>): Array<IData> => {
    const formatedData = list.map((item) => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "eventual" ? "#8be9fd" : "#ff5555",
      };
    });
    return formatedData;
  };

  useEffect(() => {
    const filteredDate = filterDateByMonthAndYear(listType.data);
    const resp = formatData(filteredDate);
    setData(resp);
  }, [type, selectedYear, selectedMonth]);

  return (
    <Container>
      <ContentHeader title={listType.title} lineColor={listType.lineColor}>
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
