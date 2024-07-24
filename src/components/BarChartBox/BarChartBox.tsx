import React from "react";
import { Container, Legend, LegendContainer } from "./styles";
import { SideLeft, SideRight } from "../BarChartBox/styles";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";
import { formatCurrency } from "../../utils/formatCurrency";

interface BarChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: string;
    color: string;
  }[];
}

const BarChartBox: React.FC<BarChartBoxProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
          {data.map((indicator) => (
            <Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}</div>
              <span>{indicator.name}</span>
            </Legend>
          ))}
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey={"amount"} name={"Valor"}>
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  fill={indicator.color}
                  cursor={"pointer"}
                />
              ))}
              <Tooltip
                cursor={{ fill: "none" }}
                formatter={(value) => formatCurrency(Number(value))}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;
