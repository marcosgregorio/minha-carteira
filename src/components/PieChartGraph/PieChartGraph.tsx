import {
  Container,
  SideLeft,
  SubtitleContainer,
  Subtitle,
  SideRight,
} from "./styles";
import { ResponsiveContainer, Pie, Cell, PieChart } from "recharts";
type PieChartGraphProps = {};

export const PieChartGraph: React.FC<PieChartGraphProps> = () => (
  <Container>
    <SideLeft>
      <h2>Relacao</h2>
      <SubtitleContainer>
        <Subtitle color="blue">
          <div>5%</div>
          <span>Entradas</span>
        </Subtitle>
        <Subtitle color="red">
          <div>95%</div>
          <span>Saidas</span>
        </Subtitle>
      </SubtitleContainer>
    </SideLeft>
    <SideRight>
      <div>aaaaa</div>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={[]} labelLine={false} dataKey="percent" />
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
