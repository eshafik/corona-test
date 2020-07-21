
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CoronaTest from "../pages/CoronaTest/CoronaTest";
import About from "../pages/About/About";

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={CoronaTest}></Route>
            <Route exact path='/corona-test' component={CoronaTest}></Route>
            <Route exact path='/corona-test/about' component={About}></Route>
        </Switch>
    );
}

export default Main;