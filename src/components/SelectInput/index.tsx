import React from "react";
import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  //onChange: () => void;
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>;
        })}
      </select>
    </Container>
  );
};

export default SelectInput;
