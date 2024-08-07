import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
    <ButtonContainer {...rest}>
        {children}
    </ButtonContainer>
)