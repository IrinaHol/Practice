import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import Main_Page from "./Components/Main_Page_Components/Main_Page";
import Login from "./Components/Login_Component/Login";
import User from './Components/Create_Internal_User/CreateInternalUser';

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact{...props} component={Main_Page}/>
                <Route path={'/login'} exact{...props} component={Login}/>
                <Route path={'/registration'} exact{...props} component={User}/>
            </Switch>
        </Router>
    );
}
