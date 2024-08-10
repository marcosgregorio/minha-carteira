import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  grid-area: AS;
  display: block;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  padding-left: 20px;
  /* border-right: 1px solid ${(props) => props.theme.colors.gray}; */
  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  padding: 1em;
  @media (max-width: 850px) {
    display: none;
    position: fixed;
    z-index: 1000;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogImg = styled.img`
  @media (max-width: 850px) {
    display: none;
  }
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

export const MenuItemButton = styled.button`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;

  margin: 0 7px;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 18px;
  }
`;

export const CloseAsideBar = styled.div`
  margin-top: 70vh;
  padding: 10px;
  > button {
    width: 100%;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.info};
    border-radius: 15px;
  }
`;
