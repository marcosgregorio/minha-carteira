import styled from "styled-components";

type ContainerProps = {
  color: string;
};

type TagProps = {
  color: string;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.color};
  border-radius: 5px;

  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;
  // usado para manter a posicao da tag
  position: relative;
  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;

export const Tag = styled.div<TagProps>`
  background-color: ${(props) => props.color};
  position: absolute;
  width: 10px;
  height: 30px;
  left: 0;
`;

export const ContainerTitle = styled.div`
  margin: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3``;

export const Subtitle = styled.small``;

export const Amount = styled.h3`
  margin-right: 1em;
`;
