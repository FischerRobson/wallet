import React from "react";
import { Container } from "./styles";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Data {
  month: string;
  amountGains: number;
  amountExpenses: number;
}

interface IHistoryBoxProps {
  data: Data[];
  colorGains: string;
  colorExpenses: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  colorGains,
  colorExpenses,
}) => {
  return (
    <Container>
      <h2>Histórico de Operações</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 30" stroke="" />
          <XAxis dataKey="month" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amountGains"
            name="Entradas"
            stroke={colorGains}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amountExpenses"
            name="Saídas"
            stroke={colorExpenses}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default HistoryBox;
