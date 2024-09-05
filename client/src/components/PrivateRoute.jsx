import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {

    const { authtoken } = useContext(AuthContext);
    return authtoken ? children : <Navigate to="/login" />;
}

export default PrivateRoute;