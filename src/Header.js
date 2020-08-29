import React from 'react';
import logo from './img/logo.png';
import './Header.css';
import {Link} from "react-router-dom";
import {SearchIcon} from "@material-ui/icons";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketIcon";


const  Header = () => {
    return (
        <nav className="header">
            <Link to="/home">
                <img
                className="header__logo"
                alt="amazon__logo"
                src={logo}
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Aziz</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

        
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return </span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
      


 
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__links">
                   <div className="header__optionBasket">
                       <ShoppingBasketIcon/>
                       <span>0</span>
                   </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header;
