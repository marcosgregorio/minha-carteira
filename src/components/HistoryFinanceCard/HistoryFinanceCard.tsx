import { Amount, Container, ContainerTitle, Subtitle, Tag, Title } from "./styled";

type HistoryFinanceCardProps = {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
};

export const HistoryFinanceCard: React.FC<HistoryFinanceCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container color={cardColor}>
      <Tag color={tagColor}></Tag>
      <ContainerTitle>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerTitle>
      <Amount>{amount}</Amount>
    </Container>
  );
};
