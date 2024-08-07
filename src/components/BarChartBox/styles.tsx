import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  min-height: 26px;
  margin: 10px 0;
  display: flex;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  border-radius: 7px;
`;
export const SideLeft = styled.aside`
  padding: 30px 20px;
  flex: 1;

  > h2 {
    margin-bottom: 10px;
  }
`;
export const SideRight = styled.main`
  flex: 1;
  min-height: 150px;
  display: flex;
  justify-content: center;
  padding-top: 35px;
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

interface LegendProps {
  color: string;
}

export const Legend = styled.li<LegendProps>`
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
