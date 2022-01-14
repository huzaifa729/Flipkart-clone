import React from 'react'
import './Collection.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from '@mui/icons-material/Star';
function Collection() {
    return (
        <div className='collection'>
           <h3 className='headn'>Filter</h3>

           <div className='catn'>
               <h4 className='crt'>Category</h4>
                <div className='mult'>
                    <span className='ek'> <ArrowBackIosIcon fontSize='small'/> Pens & Stationery </span>
                    <span className='doo'> <ArrowBackIosIcon fontSize='small'/> Office Supplies </span>
                </div>
           </div>

              <div className='Discount'>
              <h4 className='crt'>Discount</h4>
          <div className='text'>
                 <span className='ao'><input  type="checkbox"/> 70% and more </span>
                 <span className='ao'><input type="checkbox"/> 60% and more </span>
                 <span className='ao'><input type="checkbox"/> 50% and more </span>
                 <span className='ao'><input type="checkbox"/> 30% and more </span>
                 <span className='ao'><input type="checkbox"/> 20% and below</span>
              </div>
            </div>

            <div className='Discount'>
              <h4 className='crt'>Customer Ratings</h4>
          <div className='text'>
                 <span className='ao'><input  type="checkbox"/> 4.2<StarIcon className='stars' fontSize='small'/>& above </span>
                 <span className='ao'><input type="checkbox"/> 2.8<StarIcon className='stars' fontSize='small'/>& above  </span>
                 <span className='ao'><input type="checkbox"/> 2.1<StarIcon className='stars' fontSize='small'/>& above  </span>
                 <span className='ao'><input type="checkbox"/> 3.5<StarIcon className='stars' fontSize='small'/>& above  </span>

              </div>
            </div>


            <div className='Discount'>
              <h4 className='crt'>Brand</h4>
          <div className='text'>
                 <span className='ao'><input  type="checkbox"/> Flipkart SmartBuy </span>
                 <span className='ao'><input type="checkbox"/> AVI </span>
                 <span className='ao'><input type="checkbox"/> Yamaha </span>
                 <span className='ao'><input type="checkbox"/> Modaro </span>
                 <span className='ao'><input type="checkbox"/> 3D Spectra Technology</span>
                 <span className='ao'><input type="checkbox"/> 3deye </span>
              </div>
            </div>

            <div className='Discount'>
              <h4 className='crt'>OFFERS</h4>
          <div className='text'>
                 <span className='ao'><input  type="checkbox"/> Buy More, Save More </span>
                 <span className='ao'><input type="checkbox"/> No Cost EMI </span>
                 <span className='ao'><input type="checkbox"/> Special Price </span>
                
              </div>
            </div>
        </div>
    )
}

export default Collection
