import React from 'react'
import './Take.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Take() {
    return (
       <div className='hum'>

               <div className='gyu'>

                   <div className='dut'>
                       <div className='buk'>
                           <div className='imge'>
                               <img src="https://rukminim1.flixcart.com/image/800/960/k2jbyq80/shoe/f/u/y/cg-248-11-campus-blu-sky-original-imafhvb9gzrugdz3.jpeg?q=50"alt="lo"/>
                           </div>
                           <div className='btkns'>
                               <button className="btn1">
                                   <a href='/'>
                               <ShoppingCartIcon className='oin' fontSize='small'/>ADD TO CART
                               </a>
                               </button>

                               <button className="btn2">
                               <a href='/'>
                               <BoltIcon className='oin' fontSize='small'/>BY NOW
                               </a>
                               </button>
                           </div>
                       </div>
                   </div>

                   <div className='btyu'>
                       <div className='ko'>
                          <div className='vindesl'>
                              <span className='oon'>CAMPUS</span>
                              <span className='son'>ROYCE-2 Running Shoes For Men  (Blue)</span>
                          </div>

                          <div className='spcal'>
                          Special price
                       </div>

                       <div className='prices'>
                           <span className='on1'>₹965</span>
                           <span className='on2'><del>₹1,049</del></span>
                           <span className='on3'>8% off</span>
                       </div>

                          <div className='str'>
                             <div className='star'>4.2<StarBorderIcon className='i-st' fontSize='small'/></div>
                             
                             <div className='names'>
                             8,207 ratings and 1,132 reviews
                             </div>

                             <div className='flpk'>
                                 <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"alt='lo'/>
                             </div>
                          </div>

                          <div className='biknm'>
                              <div className='head'>Available offers</div>
                          </div>
                       </div>
                   </div>

               </div>

       </div>
    )
}

export default Take
