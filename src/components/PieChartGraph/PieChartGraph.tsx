import { indicatorsContainerCSS } from "react-select/dist/declarations/src/components/containers";
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
    percent?: string;
    color: string;
  }[];
};

export const PieChartGraph: React.FC<PieChartGraphProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relacao</h2>
      <SubtitleContainer>
        {data.map((indicator, i) => (
          <Subtitle color={indicator.color} key={i}>
            <div>{indicator.percent}</div>
            <span>{indicator.name}</span>
          </Subtitle>
        ))}
      </SubtitleContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={[]} labelLine={false} dataKey="percent" />
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
