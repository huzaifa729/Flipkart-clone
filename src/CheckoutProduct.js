import React from 'react';
import './Checkoutproduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, rating, price, cut, offer}) {
     const [{cart},dispatch]  = useStateValue();

     const remove = ()=>{
        dispatch({
            type: "Remove-Cart",
            id:id,
        }) 
     }
  return(
    
<div className='checkoutproduct'>
<img className="check--images" src={image}alt="" /> 

   <div className='left-flex'>
       <div className='headings'>{title}</div>
       <div className='all-pries'>
           <div className='pr-ice'><strong>₹</strong>{price}</div>
           <div className='cut-price'><del><strong>₹</strong>{cut}</del></div>
           <div className='offers-off'>{offer}</div>
           <div className='appli'>1 offer applied <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="_3GN0Y0"><g fill="none"><path d="M-1-1h16v16H-1"></path><path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" class=""></path></g></svg></div>
       </div>

       <div className='butn'>
           <button className='removebutton' onClick={remove}>Remove</button>
       </div>
   </div>
</div>




  ) 
}

export default CheckoutProduct;
