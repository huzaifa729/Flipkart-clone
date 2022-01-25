import React from 'react';
import { useStateValue } from './StateProvider';

import './Subtotal.css'
function Subtotal() {
 const [{cart}, dispatch] =  useStateValue();
  return(
<div className='subtotal'>
     <h3 className='heder'>Price Details</h3>
    <div className='All-total'>
        <div className='priceses'>
           <span className='onesn'>Price ({cart.length})items</span>
           <span className='towes'>0</span>
        </div>

        <div className='priceses'>
           <span className='onesn'>Price ({cart.length})items</span>
           <span className='towes'>0</span>
        </div>

        <div className='priceses'>
           <span className='onesn'>Price ({cart.length})items</span>
           <span className='towes'>0</span>
        </div>
    </div>
</div>
  ) 
}

export default Subtotal;
