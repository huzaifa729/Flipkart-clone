import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getcart, getDiscount } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'
function Subtotal() {
 const [{cart}, dispatch] =  useStateValue();
  return(
<div className='subtotal'>

   
   <h3 className='heder'>Price Details</h3>

     <CurrencyFormat
       renderText={ (value, value1)=>(
          <>
         <div className='All-total'>
         <div className='bnk'>
         <p className='p-r'>Price ({cart.length} items)</p>
             <p className='p-v'>{value}</p>
        </div>
    
          <div className='bnk'>
         <p className='p-r'>Discount</p>
             <p className='p-v'>{value1}</p>
        </div>
    
         <div className='bnk'>
         <p className='p-r'>Delivery Charges</p>
             <p className='p-v'>₹{20}</p>
        </div> 
        </div>
    </>
       )}

         decimalScale = {2}
         value = {getcart(cart)}
         value1 = {getDiscount(cart)}
         displayType = {"text"}
         thousandSeparator = {true}
         prefix = {"₹"}
/>
</div>
  ) 
}

export default Subtotal;
