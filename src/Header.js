import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

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
                   <input className="sarch" type="text" placeholder="Search"/>
                    <SearchIcon className="s-icon"/>
                  </div>
          </div>
        </div>
    )
}

export default Header
