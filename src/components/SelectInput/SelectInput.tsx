import React from "react";
import { Container } from "./styles";
import Select, { SingleValue } from "react-select";
import { useTheme } from "styled-components";

type SelectInputProps = {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange: (value?: string | number) => void;
};

export const SelectInput: React.FC<SelectInputProps> = ({ options, onChange }) => {
  const theme = useTheme();
  const noOptionMessage = {
    inputValue: "Sem opcoes ;(",
  };

  return (
    <Container>
      <Select
        inputValue=""
        onChange={(newValue) => {
          const value = newValue?.value;
          onChange(value);
        }}
        onInputChange={() => console.log("mudeii input change")}
        onMenuClose={() => console.log("mudeii menu close")}
        onMenuOpen={() => console.log("mudeii menu open")}
        options={options}
        placeholder="Selecione ..."
        styles={{
          control: (baseStyle, state) => ({
            display: "flex",
            color: `${theme.colors.black}`,
            borderRadius: "0.3em",
            backgroundColor: theme.title == "dark" ? "white" : "#dadada",
            boxShadow: "0 2px 4px rgba(0,0,0,.2)",
            border: state.isFocused ? "1px solid #357bfc" : "1px solid black",
          }),
          option: (baseStyle, state) => ({
            padding: "0.3em",
            color: "black",
            backgroundColor: state.isFocused ? `#9daefc` : `${theme.colors.white}`,
            cursor: "pointer",
          }),
        }}
      />
    </Container>
  );
};
