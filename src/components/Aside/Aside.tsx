import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from "./styles";
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md";

import logoImg from "../../assets/logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo minha carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink to="dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink to="/list/entry">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink to="/list/out">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>
        <MenuItemLink to="/menu">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
