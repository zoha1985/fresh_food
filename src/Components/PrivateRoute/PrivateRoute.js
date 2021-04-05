import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';




const PrivateRoute = ({ children, ...rest }) => {
    const [logededInUser, setLogededInUser] = useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        logededInUser.email || logededInUser.displayName ? (
            children
        ) : (
            <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
            />
        )
    }
    />
    );
};

export default PrivateRoute;