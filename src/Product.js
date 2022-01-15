import React from 'react'
import './Product.css'


function Product({ id, image, title, rating, price, cut, offer }){

    return (
        <div className="product">

         <div className='product-all'>
         <img className="product--images" src={image}alt="" /> 

              <p className='title'>{title}</p>

              <p className='ratng'>{rating}</p>

              <div className='rating-price'>
             <bold>%</bold>
              <span className='price'>{price} </span>
               <span className='cut'> <del>{cut}</del></span>
              <span className='ofer'>{offer}</span>  
              </div>

         </div>
      
    </div>


    )
}

export default Product

