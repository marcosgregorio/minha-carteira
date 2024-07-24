import { createContext, useContext, useState } from "react";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface ThemeContextData {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    };
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(dark);

    const toggleTheme = () => {
        if (theme.title === "dark") {
            setTheme(light);
        } else {
            setTheme(dark);
        }
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeContextData {
    const context = useContext(ThemeContext);

    return context;
}
