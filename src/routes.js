import React from 'react';
import {Router, Route} from 'react-router-dom';
import Page from "./modules/pages";

const UserData = () => {
    return (

                        <Route exact path={'/'} component={Page}/>
    )
}

export default UserData;