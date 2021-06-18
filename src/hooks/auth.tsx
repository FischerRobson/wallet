import React, { createContext, useState, useContext } from "react";
import Cookie from "js-cookie";

interface IAuthContext {
  logged: boolean;
  signIn(user: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const isLogged = !!Cookie.get("logged"); // !! -> converte para uma expressao booleana

  const [logged, setLogged] = useState<boolean>(isLogged);

  const signIn = (user: string, password: string): void => {
    if (user === "fischer" && password === "123") {
      Cookie.set("logged", "true");
      setLogged(true);
    } else alert("senha errada trouxa!");
  };

  const signOut = () => {
    Cookie.remove("logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  return context;
};
