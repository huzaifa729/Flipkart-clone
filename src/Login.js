import React from 'react'
import './Login.css';

function Login() {
    return (
        <div>
              <div className='bold-box'>
                 {/* <div className='fert'> */}
                     <div className='nuyis'>
                         <div className='dart'>
                             Login
                         </div>
                         <div className='in'>
                             <span className='ones'>Get access to your Orders,</span>
                             <span className='tones'>Wishlist and Recommendations</span>
                         </div>
                         <div className='mages'>
                         <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png' alt='m'/>
                         </div>
                     </div>


                     <div className='kipmn'>
                     <div class="xero">
                <input type="text" required/>
                       <span></span>
                  <label>Enter Email/Mobile Number</label>
                     </div> 


                     <div class="xero">
                <input type="password" required/>
                       <span></span>
                  <label>Enter Password</label>
                    </div> 


                 <div className='katm'>
                 By continuing, you agree to Flipkart's
                 <a className='jui' target="_blank" href='/'>
                     Terms of Use
                 </a>
                  and
                <a className='jui' target="_blank" href='/'>
                    Privacy Policy
                 </a>
           </div>
            
             <div className='loj'>
                 <button className="btnsn">Login</button>
             </div>

             <div className='or'>
                 OR
             </div>

             <div className='req'>
                 <button className="bton">Request OTP</button>
             </div>

             <div className="New">
             <a className='flip' target="_blank" href='/'>
             New to Flipkart? Create an account
             </a>
             </div>

</div>
                
                 {/* </div> */}
              </div>

             
        </div>
    )
}

export default Login
