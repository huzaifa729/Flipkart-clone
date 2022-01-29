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
           <div className='pr-ice'>{price}</div>
           <div className='cut-price'>{cut}</div>
           <div className='offers-off'>{offer}</div>
       </div>

       <div className='butn'>
           <button className='removebutton' onClick={remove}>Remove</button>
       </div>
   </div>
</div>
  ) 
}

export default CheckoutProduct;
