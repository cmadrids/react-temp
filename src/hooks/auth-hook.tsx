import { Context, ContextType, createContext, useCallback, useContext, useState } from "react";
import { ISession } from "../shared/models/ISession.model";
import { IUserSession } from "../shared/models/IUserSession.model";
import { IToken } from "../shared/models/IToken.model";

/**
 * Gets the session saved in localstorage.
 * @returns {ISession | null} - the session object from localStorage.
 */
const getSession = (): ISession | null => {
    const session = localStorage.getItem('tests-app-session');
    if(session) {
        return JSON.parse(session);
    }
    return null;
};

/**
 * Gets the token saved in localstorage.
 * @returns {IToken, null} - The token object from the session,
 * or null if the session is not present or does not contain a token.
 */
const getToken = (): IToken | null => {
    const session = getSession();
    if(session) {
        return session.token;
    }
    return null;
};

/**
 * Determines if the token in localStorage is still valid.
 * @returns {boolean} whether the token is valid or not.
 */
const isTokenValid = (): boolean => {
    const token = getToken();
    if(!token) {
        return false;
    }

    const expiry = (JSON.parse(atob(token.accessToken.split('.')[1]))).exp;
    const currentTime = Math.floor((new Date).getTime() / 1000);

    return expiry >= currentTime;
};

type AuthStateType = {
    isAuthenticated: boolean;
}

type AuthContextType = {
    isAuthenticated: boolean;
    setSession: (session: ISession) => void;
    getToken: () => IToken | null,
    getUser: () => IUserSession | undefined;
    crearSession: () => void;
    isTokenValid: () => boolean;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: isTokenValid(),
    setSession: () => {},
    getToken: () => null,
    getUser: () => undefined,
    crearSession: () => {},
    isTokenValid: () => false
});

export const AuthStatusProvider = (props: { value?: boolean, children: JSX.Element }) => {

    const [ authState, setAuthState ] = useState<AuthStateType>({ isAuthenticated: isTokenValid() });

    /**
     * Sets the session in localStorage.
     * Changes the authState to true.
     * @param {ISession} session - The session object including user and token.
     */
    const setSession = useCallback((session: ISession) => {
        localStorage.setItem('tests-app-session', JSON.stringify(session));
        setAuthState({ isAuthenticated: true });
    }, []);

    /**
     * Get the user from the session.
     * @returns {IUserSession | undefined} - the user object from the session,
     * or undefined if the session is not present or does not containr a user.
     */
    const getUser = useCallback((): IUserSession | undefined => {
        const strSession = localStorage.getItem('session');
        let session: ISession | null = null;
        let user: IUserSession | undefined;
        if(strSession) {
            session = JSON.parse(strSession);
            user = session?.user;
        }
        return user;
    }, []);

    /**
     * Clears the session from localStorage.
     * Sets authState to false.
     */
    const crearSession = useCallback(() => {
        localStorage.removeItem('session');
        setAuthState({ isAuthenticated: false });
    }, []);

    return (<AuthContext.Provider value={{
        isAuthenticated: authState.isAuthenticated,
        setSession,
        getToken,
        getUser,
        crearSession,
        isTokenValid
    }}>
        {props.children}
    </AuthContext.Provider>);
}

const useAuth = () => useContext(AuthContext) as ContextType<Context<AuthContextType>>;

export default useAuth;
