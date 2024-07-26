import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 100%;
    margin: 7px 0;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.warning};
    
    transition: all 0.3s;
    &:hover {
        opacity: 0.8;
    }
`;    