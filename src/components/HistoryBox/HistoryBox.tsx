import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import {
  Container,
  ChartContainer,
  ChartHeader,
  LegendContainer,
  Legend,
} from "./styles";

import { formatCurrency } from "../../utils/formatCurrency";

type HistoryBoxProps = {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
};

export const HistoryBox: React.FC<HistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}) => {
  return (
    <Container>
      <ChartHeader>
        <h2>Historico de saldo</h2>
        <LegendContainer>
          <Legend color={'#f7931b'}>
            <div>30%</div>
            <span>Entradas</span>
          </Legend>
          <Legend color="#e44c4e">
            <div>50%</div>
            <span>Saidas</span>
          </Legend>
        </LegendContainer>
      </ChartHeader>

      <ChartContainer>
        <ResponsiveContainer>
          <LineChart
            data={[data]}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray={"3 3"} stroke="#cecece" />
            <XAxis dataKey={"month"} stroke="#cecece" />
            <Tooltip formatter={(value) => formatCurrency(Number(value))}/>
            <Line
              type={"monotone"}
              dataKey={"amountEntry"}
              name="Entradas"
              stroke={lineColorAmountEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type={"monotone"}
              dataKey={"amountOutput"}
              name="saidas"
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};
