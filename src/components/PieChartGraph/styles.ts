import styled from "styled-components";

interface LegendProps {
  color: string;
}
export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 10px 0;
  padding: 30px 20px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  border-radius: 7px;

  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;

  > header img {
    width: 35px;
    margin-left: 7px;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
`;

export const SubtitleContainer = styled.ul`
  list-style: none;
  padding: 1px;
  max-height: 8em;
  overflow-y: scroll;
`;

export const Subtitle = styled.li<LegendProps>`
  display: flex;
  align-items: center;

  font-size: 16px;
  margin-bottom: 7px;
  > div {
    background-color: ${(props) => props.color};

    width: 40px;
    height: 40px;
    border-radius: 5px;

    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 5px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 1345px) {
    height: 100%;
  }
`;
