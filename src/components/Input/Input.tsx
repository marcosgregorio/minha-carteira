import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ ...rest }) => (
  <InputContainer {...rest} />
);
