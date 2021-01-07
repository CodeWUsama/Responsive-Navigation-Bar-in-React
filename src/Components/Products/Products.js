import React, { Component } from 'react';
import classes from "./Products.module.css";

export default class Products extends Component {
    render() {
        return (
            <div className={classes.rootCont} id="products">
                <h1>Products</h1>
            </div>
        );
    }
}