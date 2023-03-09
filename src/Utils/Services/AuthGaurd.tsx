import React from 'react';
import { Navigate } from "react-router-dom";
import { isLogin } from './Auth';


function AuthGaurd({ children, redirectTo }:any) {
    return isLogin() ? children : <Navigate to={redirectTo} />;
}

export default AuthGaurd;