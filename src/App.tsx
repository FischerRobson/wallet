import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dracula from "./styles/themes/dracula";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dracula}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
