
import React from 'react'
import Collection from './Collection'
import Accordion from './Accordion'
import './FlipkartShoping.css'

function FlipkartShoping(id, img, title, price) {
    return (
        <div className='mixer'>
           <div className='left-side'>
             <Collection/>
             <Accordion/>
           </div>

           <div className='right-side'>
          
           </div>
        </div>
    )
}

export default FlipkartShoping
