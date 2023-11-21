import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/auth-hook";

type RequireAuthProps = {
    children: ReactNode
}

/**
 * Checks if the user is authenticated before navigating to a route.
 * @param {RequireAuthProps} props - the children JSX element.
 * @returns {JSX.Element | Function} the original route element to navigate to.
 */
const RequireAuth = (props: RequireAuthProps): JSX.Element | ReactNode => {

    const { isAuthenticated } = useAuth();

    if(!isAuthenticated) {
        return <Navigate to="/login" />
    }
    
    return props.children as JSX.Element;
}

export default RequireAuth;