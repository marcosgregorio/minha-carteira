import styled from "styled-components";

type TitleContainerProps = {
  linecolor: string;
};

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const TitleContainer = styled.div<TitleContainerProps>`
  > h1 {
    color: ${(props) => props.theme.colors.white};
    &:after {
      content: "";
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.linecolor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  gap: 10px;
`;
