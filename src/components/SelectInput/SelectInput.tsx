import React from "react";
import { Container } from "./styles";

type SelectInputProps = {
  options: {
    value: string | number;
    label: string | number;
  }[];
};

export const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((option) => (
          <option value={option.value}> {option.label}</option>
        ))}
      </select>
    </Container>
  );
};
