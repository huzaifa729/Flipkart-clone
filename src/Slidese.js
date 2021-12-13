 import React from 'react'
 import Carousel from "react-multi-carousel";
 import "react-multi-carousel/lib/styles.css";
import Home from './Home';
 
 const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 1 // optional, default to 1.
  },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 2,
    //  slidesToSlide: 2 // optional, default to 1.
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
    //  slidesToSlide: 1 // optional, default to 1.
   }
 };

 const Slidese = ({ title, price, image}) =>{
  return(
 
 <Carousel
   swipeable={false}
   draggable={false}
   showDots={false}
   responsive={responsive}
   infinite={true}
   keyBoardControl={true}
   autoPlaySpeed={1000}
  
 >

    {/* <div> <Home/></div>
    <div> <Home/></div>
    <div> <Home/></div> */}
    
  <Home/>


</Carousel>



 
  )
 };
 export default Slidese

//  <img src='https://rukminim1.flixcart.com/image/150/150/kalecnk0/shoe/h/q/d/gc-1868115-5-woodland-navy-original-imafs4yqesjg4wam.jpeg?q=70'/>
