import React, { Component } from 'react';
import classes from "./Home.module.css";

export default class Home extends Component {
    render() {
        return (
            <div className={classes.rootCont} id="home">
                <h1>Home</h1>
            </div>
        );
    }
}