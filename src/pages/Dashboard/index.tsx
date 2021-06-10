import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
  ];

  //just a test

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
        {/* <SelectInput options={options} onChange={() => {}} />
        <SelectInput options={options} onChange={() => {}} /> */}
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
