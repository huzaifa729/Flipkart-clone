import React from 'react';
import './Checkout.css'
import { useStateValue } from './StateProvider';
function Checkout() {

 const [{cart},dispatch]  = useStateValue();
  return (
  <div className='checkout'>
       <div className='checkout-left'>
    
          <div className='my-cart'>
              <p className='cartn'>My Items ({cart.length}) </p>
          </div>
      
        <div className='pin'>
            Enter The Pin
        </div>
       </div>

       <div className='checkout-right'>

       </div>
  </div>
)
}

export default Checkout;
