
import { ReactComponentElement } from "react";
import { Navigate } from "react-router-dom";

type PropsType = {
    children: ReactComponentElement<any>;
};

export const ProtectedRoute: React.FC<PropsType> = ({ children }) => {
    const logged= true

    return logged
        ? children
        : <Navigate to="/page/:error" />;
};