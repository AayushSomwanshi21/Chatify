import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthState = ({ children }) => {

    const [authtoken, setAuthtoken] = useState(localStorage.getItem('token') || null);

    const login = (token) => {
        setAuthtoken(token);
        localStorage.setItem('token', token);
    }
    const logout = () => {
        setAuthtoken(null);
        localStorage.removeItem('token');
    }
    return (
        <AuthContext.Provider value={{ login, logout, authtoken }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthState }   