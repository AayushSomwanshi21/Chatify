import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthState = ({ children }) => {

    const [authtoken, setAuthtoken] = useState(localStorage.getItem('token') || null);
    const [searchresults, Setsearchresults] = useState([])
    const login = (token) => {
        setAuthtoken(token);
        localStorage.setItem('token', token);
    }
    const logout = () => {
        setAuthtoken(null);
        localStorage.removeItem('token');
    }

    const updateUser = async (name) => {

        const response = await fetch(`http://localhost:5000/api/auth/updateuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ name })
        });
        const json = await response.json();
        console.log(json);
    }

    const getsearch = async (name) => {

        const response = await fetch(`http://localhost:5000/api/auth/search`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ name })
        });
        const json = await response.json();
        return json;
        //console.log(json);
    }

    return (
        <AuthContext.Provider value={{ login, logout, authtoken, updateUser, getsearch, searchresults }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthState }   