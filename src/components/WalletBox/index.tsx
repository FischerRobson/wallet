import React from "react";
import { Container } from "./styles";
import dollarImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";
import CountUp from "react-countup";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dolar" | "arrow-up" | "arrow-down";
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {
  const selectedIcon = () => {
    switch (icon) {
      case "dolar":
        return dollarImg;
      case "arrow-up":
        return arrowUpImg;
      case "arrow-down":
        return arrowDownImg;
    }
  };

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix="R$ "
          separator="."
          decimal=","
          decimals={2}
          preserveValue={true}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={selectedIcon()} alt={title} />
    </Container>
  );
};

export default WalletBox;
