import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ApplicationRoutes } from "./routes";
import { useTheme } from "./hooks/theme";
import { AuthProvider } from "./hooks/auth";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <ApplicationRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
