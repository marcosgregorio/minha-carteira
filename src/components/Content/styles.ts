import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 25px;

  /* pego o total do view menos o tamanho 
    do header que e de 70px.
    Esse calculo resulta no tamanho total q deve aparecer em tela */
  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #30336f;
  }

  scrollbar-color: ${(props) => props.theme.colors.secondary} // @ts-expect-error
    ${(props) => props.theme.colors.tertiary};
`;
