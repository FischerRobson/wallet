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

  const [selectedFrequency, setSelectedFrequency] = useState([
    "recorrente",
    "eventual",
  ]);

  const { type } = match.params;

  const listType = useMemo(() => {
    return type === "entry"
      ? { title: "Entradas", lineColor: "#50fa7b", data: gains }
      : { title: "Saídas", lineColor: "#ff5555", data: expenses };
  }, [type]);

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

  const filterByFrequency = (list: Array<IPrevData>): Array<IPrevData> => {
    const filteredData = list.filter((e) =>
      selectedFrequency.includes(e.frequency)
    );
    return filteredData;
  };

  useEffect(() => {
    const filteredDataByDate = filterDateByMonthAndYear(listType.data);
    const filteredDataByFrequency = filterByFrequency(filteredDataByDate);
    const resp = formatData(filteredDataByFrequency);
    setData(resp);
  }, [type, selectedYear, selectedMonth, selectedFrequency]);

  const handleFrequencyClick = (frequency: string) => {
    const filteredFrequency = selectedFrequency.filter((e) => e !== frequency);
    if (filteredFrequency.length === selectedFrequency.length) {
      setSelectedFrequency([...selectedFrequency, frequency]);
    } else {
      setSelectedFrequency(filteredFrequency);
    }
  };

  //gera os anos dinamicamente
  // const years = useMemo(() => {
  //   let uniqueYears: string[] = [];
  //   listType.data.forEach((item) => {
  //     const date = format(new Date(item.date), "yyyy");
  //     if (!uniqueYears.includes(date)) {
  //       uniqueYears.push(date);
  //     }
  //   });
  //   return uniqueYears.map((year) => {
  //     return {
  //       value: year,
  //       label: year,
  //     };
  //   });
  // }, []);

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
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            selectedFrequency.includes("recorrente") && "tag-active"
          }`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            selectedFrequency.includes("eventual") && "tag-active"
          }`}
          onClick={() => handleFrequencyClick("eventual")}
        >
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
