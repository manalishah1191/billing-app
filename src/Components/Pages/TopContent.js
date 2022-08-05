import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../Assets/images/slider1.jpg"
import slider2 from "../Assets/images/slider2.jpg"
import slider3 from "../Assets/images/slider3.jpg"
function TopContent() {
  return (
    <>
      <>
      {/* <h1>hiii</h1> */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 h-50 pt-3" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
   
   {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '../images/slider1.jpg'}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '../images/slider3.jpg'}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '../images/slider2.jpg'}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}
   {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '../images/slider1.jpg'} />
      
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src={process.env.PUBLIC_URL + '../images/slider2.jpg'} />
    </div>
    
  </div>
</div> */}
    
    </>
  )
}

export default TopContent