import React from "react";
import { Container } from "./styles";
import { SideLeft, SideRight } from "../BarChartBox/styles";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

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
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey={"amount"}>
                            {data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
};

export default BarChartBox;
