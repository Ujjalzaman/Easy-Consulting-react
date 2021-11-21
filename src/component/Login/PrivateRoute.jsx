import React, { useContext } from 'react'
import {
    Navigate,
} from "react-router-dom";
import { UserContext } from '../../App';
const PrivateRoute = ({ children,redirectTo  }) => {
    const { user: { isSignedIn } } = useContext(UserContext)
    return isSignedIn ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute
