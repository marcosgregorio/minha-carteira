import { Amount, Container, ContainerTitle, Subtitle, Tag, Title } from "./styled";

type HistoryFinanceCardProps = {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
};

export const HistoryFinanceCard: React.FC<HistoryFinanceCardProps> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container>
      <Tag color={tagColor}></Tag>
      <ContainerTitle>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerTitle>
      <Amount>{amount}</Amount>
    </Container>
  );
};
