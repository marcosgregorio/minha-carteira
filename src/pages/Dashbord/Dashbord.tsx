import React from "react";
import { Container } from "./styles";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/SelectInput";

const Dashboard: React.FC = () => {
  const options = [
    {
      value: "Marcola",
      label: "marcola",
    },
    {
      value: "Maria",
      label: "maria",
    },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" linecolor="#000">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
