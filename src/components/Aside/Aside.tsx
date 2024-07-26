import { Container, Header, LogImg, MenuContainer, MenuItemButton, MenuItemLink, Title } from "./styles";
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md";

import logoImg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";

const Aside: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo minha carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink to="/">
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
        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
