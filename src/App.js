import React from "react";

import Main from './router/Main'
import {Nav} from "./components";
import style from './App.module.css';


class App extends React.Component{

    render() {
        return (
            <div className={style.container}>
                <Nav/>
                <Main/>
            </div>
        );
    }
}

export default App;