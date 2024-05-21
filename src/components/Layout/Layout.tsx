import { Grid } from "./styles";
import Mainheader from "../MainHeader/MainHeader";
import Aside from "../Aside/Aside";
import Content from "../Content/Content";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid>
      <Mainheader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};
