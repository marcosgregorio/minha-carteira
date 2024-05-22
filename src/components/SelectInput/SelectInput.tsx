import React from "react";
import { Container } from "./styles";
import Select from "react-select";
import { useTheme } from "styled-components";

type SelectInputProps = {
  options: {
    value: string | number;
    label: string | number;
  }[];
};

export const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  const theme = useTheme();
  const noOptionMessage = {
    inputValue: "Sem opcoes ;(",
  };

  return (
    <Container>
      <Select
        inputValue=""
        onChange={() => console.log("mudeii")}
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
            border: "1px solid black",
            boxShadow: "0 2px 4px rgba(0,0,0,.2)",
          }),
          option: (baseStyle, state) => ({
            padding: "0.3em",
            borderBottom: "1px dotted pink",
            color: "black",
            backgroundColor: state.isFocused ? `#9daefc` : `${theme.colors.white}`,
            cursor: "pointer",
          }),
        }}
      />
    </Container>
  );
};
