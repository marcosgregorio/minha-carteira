import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashbord/Dashbord";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import { Layout } from "./components/Layout/Layout";
import List from "./pages/List/List";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
