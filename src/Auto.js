// import React from 'react'
// import './Auto.css'
// import { Carousel } from '@trendyol-js/react-carousel';
// // import Highlight from 'react-highlight'
// import { Item } from './yourItem';

// function Auto() {
//     return (
//         <div>
          


// {/* <Carousel show={3.5} slide={2} transition={0.5}>
//     <Highlight color="#f27a1a">We love Trendyol orange</Highlight>
//     <Highlight color="#d53f8c">This is our github</Highlight>
//     <Highlight color="#16be48">We love Trendyol green</Highlight>
//     <Highlight color="#3f51b5">This is our website</Highlight>
// </Carousel> */}


// <Carousel>
// 		<Item />
// 		<Item />
// 		<Item />
// 		<Item />
// 	</Carousel>,
//         </div>
//     )
// }

// export default Auto


// import React from 'react'
// import ReactDOM from 'react-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
// import { Item } from './yourItem';

// function Auto() {
//     ReactDOM.render(
//         <Carousel>
//             <Item />
//             <Item />
//             <Item />
//             <Item />
//         </Carousel>,
//         document.getElementById('root'),
//     );
// }

// export default Auto


import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
 import '@brainhubeu/react-carousel/lib/style.css';
 import  './Auto.css'

function Auto() {
    return (
        <div className='deny'>
        <Carousel
  plugins={[
    // 'infinite',
    'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 3
      }
    },
  ]}
>
    
    <div className='dop'>
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/flap/1688/280/image/931efa9a8560c65f.jpg?q=50"/>
</div>

<div className='dfrt'>hghgsyhh hbhj w b hbvhbh hbh</div>
</div>

<div className='dop'>
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/flap/1688/280/image/931efa9a8560c65f.jpg?q=50"/>
</div>

<div className='dfrt'>hghgsyhh hbhj w b hbvhbh hbh</div>
</div>

<div className='dop'>
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/flap/1688/280/image/931efa9a8560c65f.jpg?q=50"/>
</div>

<div className='dfrt'>hghgsyhh hbhj w b hbvhbh hbh</div>
</div>

<div className='dop'>
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/flap/1688/280/image/931efa9a8560c65f.jpg?q=50"/>
</div>

<div className='dfrt'>hghgsyhh hbhj w b hbvhbh hbh</div>
</div>

  

</Carousel>
</div>
    )
}

export default Auto


