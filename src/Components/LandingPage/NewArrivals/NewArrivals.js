import React, { Component } from 'react';
import classes from "./NewArrivals.module.css";

export default class Products extends Component {
    render() {
        return (
            <div className={classes.rootCont} id="new">
                <h1>New Arrivals</h1>
            </div>
        );
    }
}