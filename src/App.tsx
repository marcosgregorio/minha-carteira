import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashbord/Dashbord";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import { Layout } from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
