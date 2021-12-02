import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssistantSharpIcon from '@mui/icons-material/AssistantSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
          <div className="Bgcolr">
            
            <div className="start">
            <Link to="/">
                <div className="image">
                    {/* <a href="/"> */}
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="any"/>
                    {/* </a> */}
                    </div>

                    <span className="plus">
                        {/* <a href="/"> */}
                    <span className="pol"> Explore Plus</span> 
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="any"/>                   
                {/* </a> */}
                </span>
                </Link>
            </div>


                  <div className="search-box">
                   <input className="sarch" type="text" placeholder="Search for products,brands and more"/>
                    <SearchIcon className="s-icon"/>
                  </div>

                  <div className="loginse">
                  <Link to="/login">
                      <button className="btner">Login</button>
                   </Link>
                      <div className="bint">
                          <div className="sint">
                             <div className="op">
                            <span className="ocon"><AccountCircleIcon fontSize="small"/></span>
                            <span className="writens">Profile</span>
                            </div>

                              <div className="op">
                                  <span className="ocon"><AssistantSharpIcon fontSize="small"/></span>
                                  <span className="writens">Flipkart Plus Zone</span>
                              </div>

                              <div className="op">
                                  <span className="ocon"><FavoriteBorderIcon fontSize="small"/></span>
                                  <span className="writens">Wishlist</span>
                              </div>

                              <div className="op">
                                  <span className="ocon"><AccountBalanceWalletIcon fontSize="small"/></span>
                                  <span className="writens">Gift Card</span>
                              </div>

                              <div className="op">
                                  <span className="ocon"><AttachEmailIcon fontSize="small"/></span>
                                  <span className="writens">Email</span>
                              </div>
                          </div>
                      </div>
                   
                  </div>

                  <div className="dol">
                    More<KeyboardArrowDownIcon fontSize="small" className="down-iscon"/>
                      <div className="bint">
                          <div className="sint">
                              <div className="op">
                                  <span className="ocon"><NotificationsIcon fontSize="small"/></span>
                                  <span className="writens">Notifications Preference</span>
                              </div>

                              <div className="op">
                                  <span className="ocon"><CardGiftcardIcon fontSize="small"/></span>
                                  <span className="writens">Sell on Flipkart</span>
                              </div>

                              <div className="op">
                                  <span className="ocon"><HelpIcon fontSize="small"/></span>
                                  <span className="writens">24*7 Customer Care</span>
                              </div>

                              <div className="op">
                                  <span className="ocon"><TrendingUpIcon  fontSize="small"/></span>
                                  <span className="writens">Advertise</span>
                              </div>

                              <div className="op">
                                  <span className="ocon"><FileDownloadIcon fontSize="small"/></span>
                                  <span className="writens">Download App</span>
                              </div>
                          </div>
                      </div>
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
