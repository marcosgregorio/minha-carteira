import { createContext, useContext, useState } from "react";

interface AuthContext {
    logged: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

type AuthProviderProps = {
    children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem("@minha-carteira:logged");
        return !!isLogged;
    });

    const signIn = async (email: string, password: string) => {
        if (email === "marcos@email.com" && password === "123") {
            localStorage.setItem("@minha-carteira:logged", "true");
            setLogged(true);
        } else {
            alert("Senha ou usuário inválidos!");
        }
    }

    const signOut = () => {
        localStorage.removeItem("@minha-carteira:logged");
        setLogged(false);
    }

    return(
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContext {
    const context = useContext(AuthContext);
    return context;
}