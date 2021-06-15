import React from "react";
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from "./styles";

import { PieChart as Chart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ILegend {
  name: string;
  value: number;
  color: string;
}

interface IPieChartProps {
  data: ILegend[];
}

const PieChart: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((legend, index) => {
          return (
            <Legend key={index} color={legend.color}>
              <div>{legend.value + "%"}</div>
              <span>{legend.name}</span>
            </Legend>
          );
        })}
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer>
        <Chart >
          <Pie labelLine={false} dataKey="value">
            {data.map((indicator) => {
              return <Cell key={indicator.name} fill={indicator.color} />;
            })}
          </Pie>
        </Chart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
export default PieChart;
