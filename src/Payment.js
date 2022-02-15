import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Payment() {
    const [{cart,user},dispatch]  = useStateValue();
  return (
    <div className='payment'>
       <div className='payment-container'>
             {/* login */}
             <div className='payment-section'>
               <h3>Login</h3> 
               <div className='payment-login'> 
                 <p>{"Huzaifa Dabir:-"} {user?.email}</p>
            </div> 
        </div>
           {/* Delivery */}
           <div className='payment-section'>
               <h3>DELIVERY ADDRESS</h3> 
               <div className='payment-address'>
                 <p>Flat No:-301, Hirannandani</p>  
                 <p>Andheri, India</p>
            </div> 
        </div>

        {/* Orders */}
      <div className='payment-section'>
           <h3>Order Summary</h3>  
           <div className='payment-item'>
           {cart.map (item =>(
     <CheckoutProduct
              id = {item.id}
              image = {item.image}
              title = {item.title}
              price = {item.price}
              cut = {item.cut}
             offer = {item.offer}
     />
            ))}
        </div>  
    </div>

         {/* Payment-option */}
     <div className='payment-section'>
         <h3>Payment Options</h3>   
         <div className='payment-detail'>
             {/* Stripe Secret Code */}
     </div>   
 </div>
           
  </div>  

  <div className="payment-right">
     <Subtotal/>
  </div>
</div>
  )
}

export default Payment