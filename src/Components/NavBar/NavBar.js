import React, { Component } from 'react';
import classes from './NavBar.module.css';
import hamIcon from './hamburgericon.png';
import { Route, HashRouter, NavLink } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Account from '../Account/Account';
import Products from '../Products/Products';

export default class NavBar extends Component {

    state = {
        drawer: false,
    };

    toggleMenuHandler = () => {
        this.setState({ drawer: !this.state.drawer });
    }

    componentDidMount() {
        window.addEventListener("resize", (e) => {
            if (e.target.innerWidth >= 930) {
                this.setState({ drawer: false });
            }
        })
    }

    render() {

        let assignedClasses = [];
        assignedClasses.push(classes.menuCont);

        if (this.state.drawer === true) {
            assignedClasses.push(classes.open);
        };

        return (
            <HashRouter>
                <div className={classes.rootCont} >
                    <div className={classes.navBarCont}>

                        <div className={classes.hamburgerCont}>
                            <img className={classes.hamLogo} onClick={this.toggleMenuHandler} src={hamIcon} alt="Hamburger-Icon" />
                        </div>

                        <div className={classes.logoCont}>
                            <p className={classes.logoTextFirst}>My</p>
                            <p className={classes.logoTextLast}>Fashion</p>
                        </div>

                        <div className={classes.navListCont}>
                            <div className={classes.navList}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/">Home</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/products">Products</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/contact">Contact</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/account">Account</NavLink>
                            </div>
                        </div>

                        <div className={classes.loginLinkCont}>
                            <ul className={classes.navList}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/account">Account</NavLink>
                            </ul>
                        </div>
                    </div>

                    <div className={assignedClasses.join(' ')}>
                        <div className={classes.mobileNavList}>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/">Home</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/products">Products</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/contact">Contact</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/account">Account</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/account" component={Account} />
            </HashRouter>
        );
    }
}   