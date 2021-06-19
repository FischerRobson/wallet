import React from "react";
import { Container, ToggleLabel, SwitchTheme } from "./styles";
import { useTheme } from "../../hooks/theme";

const Toggle: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <SwitchTheme
        checked={theme.title === "dracula"}
        onChange={() => toggleTheme()}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dracula</ToggleLabel>
    </Container>
  );
};

export default Toggle;
