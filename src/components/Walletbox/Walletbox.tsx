import { Container } from "./styles";
import dollarImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";
import CountUp from "react-countup";

type WalletboxProps = {
  title: string;
  amount: number;
  footerlabel: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
  color: string;
};
export const Walletbox: React.FC<WalletboxProps> = ({
  title,
  amount,
  footerlabel,
  icon,
  color,
}) => {
  const iconSelected = () => {
    return icon === "dolar" ? dollarImg : icon === "arrowDown" ? arrowDownImg : arrowUpImg;
  };
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={"R$ "}
          separator="."
          decimal=","
          decimals={2}
          preserveValue={true}
        />
      </h1>
      <small>{footerlabel}</small>
      <img src={iconSelected()} alt={title} />
    </Container>
  );
};
