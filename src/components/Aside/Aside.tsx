import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from "./styles";
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md";

import logoImg from "../../assets/logo.svg";
import { useParams } from "react-router-dom";

const Aside: React.FC = () => {
  const { type } = useParams();

  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo minha carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="/list/entry">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/out">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>
        <MenuItemLink href="/menu">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
