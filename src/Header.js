import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <div className="header">
          <div className="Bgcolr">
            
            <div className="start">
                <div className="image">
                    <a href="/">
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="any"/></a>
                    </div>

                    <div className="plus">
                        <a href="/">
                    Explore <span className="pol">Plus</span> 
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="any"/>                   
                </a>
                </div>
            </div>


                  <div className="search-box">
                   <input className="sarch" type="text" placeholder="Search for products,brands and more"/>
                    <SearchIcon className="s-icon"/>
                  </div>

                  <div className="login">
                      <a href="/">
                      <button className="btn">Login</button>
                      </a>
                  </div>

                  <div className="dol">
                      More<KeyboardArrowDownIcon fontSize="small" className="down-icon"/>
                  </div>


                  <div className="cart">
                   <ShoppingCartIcon fontSize="small" className="cart-logo"/>
                   <span className="opt">Cart</span>
                  </div>
          </div>
        </div>
    )
}

export default Header
