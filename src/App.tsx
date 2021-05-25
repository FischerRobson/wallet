import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";
import Dashboard from './pages/Dashboard'
import dracula from "./styles/themes/dracula";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dracula}>
      <GlobalStyles />
      <Layout ><Dashboard /></Layout>
    </ThemeProvider>
  );
};

export default App;
