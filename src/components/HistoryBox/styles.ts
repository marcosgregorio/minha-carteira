import styled from "styled-components";

interface LegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  height: 340px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 8px;

  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`;

export const ChartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;

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
