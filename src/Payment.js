import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { getcart } from './reducer';

function Payment() {
    const [{cart,user},dispatch]  = useStateValue();

    const stripe = useStripe();
    const elements = useElements()
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("") 
    const [clientSecret, setClientSecret] = useState(true);
  
useEffect(()=>{
  //generate the special stripe secret which allows us to charge a customer

   const getClientSecret = async () => {
     const response = await axios({
       method: 'post',
       //stripe expect total amount in base currencies like
       url: `/payment/create?total=${getcart(cart) * 100} `
     });
     setClientSecret(response.data.clientSecret);
   }

   getClientSecret();
},[cart])
   

 

   const handleSubmit = async (event) =>{
         event.preventDefaut();
         setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
          card: elements.getElement(CardElement)
        }
      }).then(({paymentIntent}) =>{
           setSucceeded(true);
           setError(null);
           setProcessing(false);

           history.replace('/orders')
      })
}

   const handleChange = event =>{
       setDisabled(event.empty);
       setError(event.error ? event.error.message : "")
  }

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
             <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className='payent-priceContainer'>
                   <button disabled = {processing || disabled || succeeded}><span >{processing ? <p>Processing</p> : "Buy Now"}</span></button>
                </div>

                  {/* Error */}
                  {error && <div>{error}</div>}
             </form>
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




