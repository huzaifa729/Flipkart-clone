import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getcart, getDiscount } from './reducer';
import { useStateValue } from './StateProvider';
import GppGoodIcon from '@mui/icons-material/GppGood';
import './Subtotal.css'
function Subtotal() {
 const [{cart}, dispatch] =  useStateValue();
  return(
<div className='subtotal'>

   <div className='subtotals-left'>
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
         <p className='p-r'>Delivery Charges</p>
             <p className='p-v'>FREE</p>
        </div> 

        <div className='bnk'>
         <p className='p-r'>Total Payable</p>
             <p className='p-v'>{value}</p>
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
   <div className='super-coin'>
       <img className='super-icon' src='https://rukminim1.flixcart.com/lockin/736/176/images/promotion_banner_v2_inactive_2.png?q=50' alt='coin'/>
     </div>

     <div className='in-icon'>
       <GppGoodIcon fontSize='medium'/> Safe and Secure Payments.Easy returns.100% Authentic products.
       </div>
</div>
  ) 
}

export default Subtotal;
