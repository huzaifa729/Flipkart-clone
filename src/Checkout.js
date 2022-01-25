import React from 'react';
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {

 const [{cart},dispatch]  = useStateValue();
  return (
  <div className='checkout'>
       <div className='checkout-left'>
    
          <div className='my-cart'>
              <p className='cartn'>My Items ({cart.length}) </p>
          </div>
      
        <div className='pin'>
            <div className="loca">
           <img className="location-image" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==' alt=''/>
            Deliver to
            </div>

            <div className='ipure'>
             <div className='trtb'> <input placeholder='Enter Delivery pincode' type="text" /><span className='chck'>Check</span></div>
            </div>
        </div>

         
       </div>

       <div className='checkout-right'>
         <Subtotal/>
       </div>
  </div>
)
}

export default Checkout;
