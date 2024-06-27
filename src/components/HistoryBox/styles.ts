import styled from "styled-components";

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
`;

export const Legend = styled.li``;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260;
`;
