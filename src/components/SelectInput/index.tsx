import React from "react";
import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  value?: string | number;
}

const SelectInput: React.FC<ISelectInputProps> = ({ options, onChange, value }) => {
  return (
    <Container>
      <select onChange={onChange} defaultValue={value}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default SelectInput;
