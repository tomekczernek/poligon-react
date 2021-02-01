import { React, useContext } from 'react';
import { Route } from 'react-router-dom';

import { Auth } from '../App';

function SecureRouts({Component, ...restProps}){

    const auth = useContext(Auth);
    const isLogged = true;

    if(isLogged){
        return (
            <Route {...restProps} >
                <Component />
            </Route>
        );
    }

    return 'You have to log in';
}

export default SecureRouts;