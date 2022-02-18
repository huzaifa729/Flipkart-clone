import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { auth } from './firebase';
import { useHistory } from 'react-router';

function Payment() {
    const [{cart,user},dispatch]  = useStateValue();

    const stripe = useStripe();
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("") 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const signIn = e =>{
      e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
               //its successfully sign in email and password
              if(auth){
                   history.push('/') 
              }
           })
            .catch(error=> alert(error.message))
    }

    const register = e =>{
      e.preventDefault();

    
       auth
       .createUserWithEmailAndPassword(email, password)
       .then((auth)=>{
           //its successfully created email and password
          if(auth){
               history.push('/') 
          }
       })
        .catch(error=> alert(error.message))
    }

   const handleSubmit = e =>{

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
                 {/* <p>{"Huzaifa Dabir:-"} {user?.email}</p> */}
            
                     <div class="xero">
                <input type="text" required  value={email} onChange={e => setEmail(e.target.value)} />
                       <span></span>
                  <label>Enter Email/Mobile Number</label>
                     </div> 

                     
                     <div class="xero">
                <input type="password" required value ={password} onChange={e => setPassword(e.target.value)}/>
                        <span></span> 
                  <label>Enter Password</label>
                    </div>
                     <div className='loj'>
                 <button type="submit" onClick={signIn} className="btnsn">Login</button>
             </div>

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