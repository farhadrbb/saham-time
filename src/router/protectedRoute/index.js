import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../redux/auth/login/auth';

export default function Index({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    console.log("auth.isAuthenticated",auth.isAuthenticated());
                    if (auth.isAuthenticated()) {

                        return <Component {...props} />
                    }
                    else {
                        return <Redirect to={"/login"} />
                    }
                }
            }
        />

    )
}
