import React from 'react'
import './Collection.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
        </div>
    )
}

export default Collection
