import { Container, ToogleLabel, ToogleSelector } from "./styles";

type ToogleProps = {
  checked: boolean;
  onChange(): void;
  labelLeft: string;
  labelRight: string;
};

export const Toogle: React.FC<ToogleProps> = ({
  checked,
  onChange,
  labelLeft,
  labelRight,
}) => {
  return (
    <Container id="toogle-theme">
      <ToogleLabel>{labelLeft}</ToogleLabel>
      <ToogleSelector
        checkedIcon
        uncheckedIcon
        checked={checked}
        onChange={onChange}
      />
      <ToogleLabel>{labelRight}</ToogleLabel>
    </Container>
  );
};
