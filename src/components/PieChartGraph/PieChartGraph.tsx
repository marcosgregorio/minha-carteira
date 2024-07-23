import {
  Container,
  SideLeft,
  SubtitleContainer,
  Subtitle,
  SideRight,
} from "./styles";
import { ResponsiveContainer, Pie, Cell, PieChart } from "recharts";
type PieChartGraphProps = {
  data: {
    name: string;
    value: number;
    percent: string;
    color: string;
  }[];
};
 
export const PieChartGraph: React.FC<PieChartGraphProps> = ({ data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>Relação</h2>
        <SubtitleContainer>
          {data.map((indicator, i) => (
            <Subtitle color={indicator.color} key={i}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Subtitle>
          ))}
        </SubtitleContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie data={data} dataKey="percent" cx="50%" cy="50%">
              {data.map((indicator, i) => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};
