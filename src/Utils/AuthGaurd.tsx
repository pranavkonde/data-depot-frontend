import React from 'react';
import { Navigate } from "react-router-dom";
// import { isLogin } from './services/auth';


function AuthGaurd({ children, redirectTo }:any) {
    return true ? children : <Navigate to={redirectTo} />;
}

export default AuthGaurd;