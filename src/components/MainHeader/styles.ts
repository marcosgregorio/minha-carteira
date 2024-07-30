import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  > button {
    display: none;
  }
  @media (max-width: 850px) {
    #toogle-theme {
      display: none;
    }
    > button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      /* padding: 2px; */
      width: 40px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.warning};
      border-radius: 5px;
      transition: opacity 0.3s;
    }
    > button:hover {
      opacity: 0.8;
    }
    > button div {
      width:25px;
      height: 2px;
      background-color: ${(props) => props.theme.colors.white};
      /* margin: 5px; */
    }
  }
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.h3``;
