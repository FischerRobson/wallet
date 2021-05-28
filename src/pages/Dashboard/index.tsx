import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";

const Dashboard: React.FC = () => {

  const options = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff" >
        <SelectInput options={options} />
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
