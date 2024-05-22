import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import { ApplicationRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <ApplicationRoutes />
    </ThemeProvider>
  );
};

export default App;
