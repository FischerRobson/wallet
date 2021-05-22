import React from "react";
import { Container, ToggleLabel, SwitchTheme } from "./styles";
import Switch from "react-switch";

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <SwitchTheme
      checked
      onChange={() => {}}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLabel>Dracula</ToggleLabel>
  </Container>
);

export default Toggle;
