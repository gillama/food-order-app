import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import headerImage from '../../assets/header-picture.jpg'
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>DomesticFoodMarket</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage}  alt="domestic food" />
            </div>
        </Fragment>
    );
};

export default Header;