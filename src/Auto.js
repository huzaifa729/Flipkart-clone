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
        <div className='don'>
          <div className='hyi'>Deals of the Day</div>
          <div className='buttone'>
            <button className='btnse'>View All</button>
          </div>
        </div>
        <Carousel
  plugins={[
     'infinite',
    'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
        numberOfSlides:4
      }
    },
  ]}
>
 

    <div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/jeek8sw0/garden-tool-set/f/n/q/619-visko-original-imaf334j5jgegagv.jpeg?q=70" alt='lo'/>
</div>

<div className='middle'>
<div className='dfrt'>Gardening Essentials</div>
<div className='num'>From ₹149</div>
<div className='sells'>Best Selling</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/jjolt3k0/t-shirt/d/y/g/m-m7ss18tee066i-metronaut-original-imaf77evd4yxvfcg.jpeg?q=70" alt='lo'/>
</div>

<div className='middle'>
<div className='dfrt'>Puma,Roadster,Killer...</div>
<div className='num'>Min 50% Off</div>
<div className='sells'>T-Shirts,Jeans,Jackets...</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/jzu60sw0/action-figure/e/t/r/toys-cyberverse-spark-armor-grimlock-action-figure-for-kids-ages-original-imafjrhbc7g2rdxg.jpeg?q=70" alt='lo'/>
</div>

<div className='middle'>
<div className='dfrt'>Remote Control,Board Games</div>
<div className='num'>Upto 70%+Extra10%off</div>
<div className='sells'>Hot Wheels, Nerf, Barbie & more</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/knrsjgw0/shoe/t/s/t/10-cd4165-400nike-nike-blackened-blue-black-electric-green-original-imag2dxbff3hvnmg.jpeg?q=70" alt='lo'/>
</div>

<div className='middle'>
<div className='dfrt'>Nike,Adidas,Rebook...</div>
<div className='num'>Min 40% Off</div>
<div className='sells'>Sports Shoes & more</div>
</div>
</a>
</div>


   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/jueep3k0/watch/e/x/n/lcs-8147-lois-caron-original-imafecc7p4u9tzgq.jpeg?q=70" alt='lo'/>
</div>

<div className='middle'>
<div className='dfrt'>Casio,Fastrack,Sonata...</div>
<div className='num'>Upto 80%+Extra 10%Off</div>
<div className='sells'>Knockout Deals!</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/kksmikw0/kids-t-shirt/1/9/v/5-6-years-mactshrt148-disney-by-miss-chief-original-imagy29q4hzhrjq4.jpeg?q=70" alt='lo'/>
</div>

<div className='middle'>
<div className='dfrt'>Miss & Chief,Provogue</div>
<div className='num'>Min 60% Off</div>
<div className='sells'>Best Quality Kids Clothing</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/kn7sdjk0/sticker/3/b/7/large-wall-stickers-wallpaper-happy-winter-trees-and-frames-home-original-imagfxzhwqqkzss2.jpeg?q=70" alt='lo'/>
</div>

<div className='middle'>
<div className='dfrt'>Best Of Home Decor</div>
<div className='num'>From ₹79</div>
<div className='sells'>Lowest Price Ever</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/k7assy80/cereal-flake/q/t/j/1-oats-pouch-saffola-original-imafpkjzepqpt8cz.jpeg?q=70" alt='lo'/>
</div>

<div className='middle'>
<div className='dfrt'>Health Foods & Snacks</div>
<div className='num'>From ₹116</div>
<div className='sells'>Oats,Nuts, Protein Bar...</div>
</div>
</a>
</div>



</Carousel>
</div>

    )
}

export default Auto


