import { Container } from "./styles";
import Mainheader from "../MainHeader/MainHeader";
import Aside from "../Aside/Aside";
import Content from "../Content/Content";

const Layout: React.FC = () => {
  return (
    <Container>
      <Mainheader />
      <Aside />
      <Content />
    </Container>
  );
};

export default Layout;
