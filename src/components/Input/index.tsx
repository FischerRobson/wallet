import React, { useState, InputHTMLAttributes } from "react";
import { Container, PasswordLabel } from "./styles";

//type IInputProps = InputHTMLAttributes<HTMLInputElement>;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
}

const Input: React.FC<IInputProps> = ({ type, isPassword, ...props }) => {
  const password = "password";
  const text = "text";

  const [passwordInputType, setPasswordInputType] = useState(type);

  const handlePasswordInputView = () => {
    setPasswordInputType(passwordInputType === password ? text : password);
  };

  return (
    <>
      <Container type={passwordInputType} {...props} />
      {isPassword && (
        <PasswordLabel onClick={() => handlePasswordInputView()}>
          {passwordInputType === password ? "ver senha" : "ocultar senha"}
        </PasswordLabel>
      )}
    </>
  );
};

export default Input;
