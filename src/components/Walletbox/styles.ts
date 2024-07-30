import styled from "styled-components";

type ContainerProps = {
  color: string;
};
export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors};
  border-radius: 7px;

  padding: 10px;
  width: 32%;
  height: 150px;
  margin: 10px 0;
  overflow: hidden;

  position: relative;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -30px;
    opacity: 0.3;
  }
  > span {
    font-size: 1.2em;
    font-weight: 500;
  }
  > small {
    font-size: 1em;
    position: absolute;
    bottom: 10px;
  }
  @media (max-width: 770px) {
    > span {
      font-size: 1em;
    }
    > h1 {
      word-wrap: break-word;
      font-size: 1.5em;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
