import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Container } from "./styles";

type HistoryBoxProps = {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
    
}

export const HistoryBox: React.FC<HistoryBoxProps> = ({data, lineColorAmountEntry, lineColorAmountOutput}) => {
  return (
    <Container>
      <h2>Historico de saldo</h2>

      <ResponsiveContainer>
        <LineChart data={[]}>
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
    </Container>
  );
};
