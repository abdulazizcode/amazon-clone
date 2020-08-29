import React from "react";
import "./Header.css";
import logo from "./img/logo.png";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  {useStateValue} from "./StateProvider";

const Header = () =>{
    const [{basket}] = useStateValue();
    console.log(basket);
    return(
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
                       <ShoppingBasketIcon className="icon__basket"/>
                       <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                   </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header;