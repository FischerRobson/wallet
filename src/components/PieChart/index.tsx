import React from "react";
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from "./styles";

import { PieChart as Chart, Pie, Cell, ResponsiveContainer } from "recharts";

interface IPieChartProps {}

const PieChart: React.FC<IPieChartProps> = ({}) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend color="#ff5555">
          <div>5%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#03BB85">
          <div>95%</div>
          <span>Entradas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>

    <SideRight>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie data={[]} labelLine={false} dataKey="percent" />
        </PieChart>
      </ResponsiveContainer> */}
    </SideRight>
  </Container>
);
export default PieChart;
