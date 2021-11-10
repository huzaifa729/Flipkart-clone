import React from 'react'
import './Slider.css'

function Slider() {
  return (
    <div>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://rukminim1.flixcart.com/flap/1688/280/image/84716a058bfb162b.jpg?q=50"  alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://rukminim1.flixcart.com/flap/1688/280/image/ff938f15fd1feb73.jpg?q=50"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/1688/280/image/a4b9e9c3ec2b0ff5.jpg?q=50" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/1688/280/image/931efa9a8560c65f.jpg?q=50" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</div>
  )
}

export default Slider

