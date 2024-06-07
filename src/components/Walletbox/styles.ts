import styled from "styled-components";

type ContainerProps = {
  color: string;
};
export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.color};
`;
