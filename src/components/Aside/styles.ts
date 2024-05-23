import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  padding-left: 20px;

  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled(RouterLink)`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;

  margin: 0 7px;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 18px;
  }
`;
