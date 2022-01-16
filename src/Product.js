import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';

function Product({ id, image, title, rating, price, cut, offer }){

    return (
        <div className="product">
      <div className='product-all'>

         <img className="product--images" src={image}alt="" /> 

              <p className='title'>{title}</p>

           <div className='ratingse'>
           <span className='ratng'>{rating}<StarIcon className='strs' fontSize='small' /></span>
           <img className='assured' src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt=''/>
           </div>


              <div className='pricen'>
               
              <span className='price'> <bold>₹</bold>{price} </span>
               <span className='cut'> <del><bold>₹</bold>{cut}</del></span>
              <span className='ofer'>{offer}</span>  
              </div>

         </div>
      
    </div>


    )
}

export default Product

