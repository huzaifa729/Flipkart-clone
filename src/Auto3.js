import React from 'react'
import './Auto3.css'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
 import '@brainhubeu/react-carousel/lib/style.css';
 import { Link } from 'react-router-dom';
function Auto3() {
    return (
        <div className='deny'>
        <div className='don'>
          <div className='hyi'>Men's Footwear</div>
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
  <Link to="/menfootwear">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/kjhgzgw0-0/shoe/4/0/c/cj0291-100nike-10-nike-white-black-flash-crimson-oracle-aqua-original-imafzfg4srdt4s5y.jpeg?q=70" alt='lo'/>
</div>
<div className='middle'>
<div className='dfrt'>Nike,Addidas,Puma..</div>
<div className='num'>Min 60% Off</div>
<div className='sells'>Running Shoes</div>
</div>
</Link>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/kljrvrk0/shoe/v/w/i/8-rso105-8-red-tape-multi-original-imagyngszcbdejgc.jpeg?q=70" alt='lo'/>
</div>
<div className='middle'>
<div className='dfrt'>Red Tape</div>
<div className='num'>Min 30% Off</div>
<div className='sells'>Casual Shoes,Sneakers</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/kuzuoi80/shoe/z/v/r/7-11009501-7-fila-bkg-rd-original-imag7zkf8nvpnsv9.jpeg?q=70" alt='lo'/>
</div>
<div className='middle'>
<div className='dfrt'>FILA,Yonex,Lotto</div>
<div className='num'>Under Rs1499</div>
<div className='sells'>Sports Shoes & more</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/k6fd47k0/shoe/g/u/p/cd0188-005-13-nike-black-white-chile-red-glass-blue-original-imafzvwzhchqphte.jpeg?q=70" alt='lo'/>
</div>
<div className='middle'>
<div className='dfrt'>Nike,Skechers & more</div>
<div className='num'>From ₹1999</div>
<div className='sells'>New Collection</div>
</div>
</a>
</div>


<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70" alt='lo'/>
</div>
<div className='middle'>
<div className='dfrt'>Sparx,Bruton & more</div>
<div className='num'>Min 40% Off</div>
<div className='sells'>Casual Shoes For Men's</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/kfvfwy80-0/shoe/j/n/s/bq3204-010-10-nike-black-original-imafw88xushewqyg.jpeg?q=70" alt='lo'/>
</div>
<div className='middle'>
<div className='dfrt'>Nike</div>
<div className='num'>Upto 50% Off</div>
<div className='sells'>Running,Walking Shoes</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/krkyt8w0/shoe/6/b/r/11-hmi55-11-adidas-vicblu-ftwwht-solred-conavy-original-imag5cd4ayngenun.jpeg?q=70" alt='lo'/>
</div>
<div className='middle'>
<div className='dfrt'>ADIDAS,Reebok,Puma..</div>
<div className='num'>Min 50% Off</div>
<div className='sells'>Sports Shoes & more</div>
</div>
</a>
</div>

   
<div className='dop'>
      <a href="/">
<div className='nuy'>
  <img src="https://rukminim1.flixcart.com/image/150/150/ktvucnk0/shoe/e/d/p/7-powerjet-07cseagrnorng-7-asian-green-original-imag74vrtfa2azex.jpeg?q=70" alt='lo'/>
</div>
<div className='middle'>
<div className='dfrt'>Asian,SEGA & more</div>
<div className='num'>From ₹399</div>
<div className='sells'>Shoes,Sandals & More</div>
</div>
</a>
</div>
</Carousel>
</div>


    )
}

export default Auto3
