import React from 'react'
import Home from './Home';

import './Product.css';
import Slidese from './Slidese';

function Product({ title, price, image}) {
    return (
         <div className="product">
         <div className="info">
    

          <p className="tit"><b>Traits:</b>{title}</p>  

          <div className="price">
    
              <p className="ruppes"><b>₹</b>{price}</p>
         </div>

          <div className="product-image">
           <img src={image} alt=""/>
          </div>

          <div className="buttos">
         <a href="/">
          <button className="btns">View All</button>
          </a>
          </div>

     </div>  

</div> 

    )
}

export default Product
