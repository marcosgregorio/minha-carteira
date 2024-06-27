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
          <Legend>
            <div>30%</div>
          </Legend>
          <Legend>
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
            <Tooltip />
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
