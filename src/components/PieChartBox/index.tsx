import React from "react";
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from "./styles";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CountUp from "react-countup";

interface ILegend {
  name: string;
  value: number;
  color: string;
}

interface IPieChartProps {
  data: ILegend[];
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((legend, index) => {
          return (
            <Legend key={index} color={legend.color}>
              <div>
                <CountUp
                  end={legend.value}
                  suffix="%"
                  decimals={1}
                  preserveValue={true}
                />
              </div>
              <span>{legend.name}</span>
            </Legend>
          );
        })}
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie labelLine={false} data={data} dataKey="value">
            {data.map((indicator) => {
              return <Cell key={indicator.name} fill={indicator.color} />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
export default PieChartBox;
