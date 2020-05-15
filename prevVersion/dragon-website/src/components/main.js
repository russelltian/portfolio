import React from 'react';
import {Switch, Route} from "react-router-dom";
import LandingPage from './landingpage';
const Main = () => (
    // eslint-disable-next-line no-unused-expressions
    <Switch>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Route exact path="/" component={LandingPage} />
    </Switch>
);
export default  Main;