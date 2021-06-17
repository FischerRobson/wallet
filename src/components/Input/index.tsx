import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...props }) => {
  return <Container {...props} />;
};

export default Input;
