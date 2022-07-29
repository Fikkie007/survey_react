import React from "react";
import '../Body/Body.css';
import Dump from '.././Assets/dump.jpg';
import Dump2 from '.././Assets/dump2.jpg';
import Dump3 from '.././Assets/dump3.jpg'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';



const Body = () => {
    return (
        <div className="body">
        <Carousel className="container">
      <Carousel.Item className="image">
          <img
          className="img-fluid"
          src={Dump}
        />
        <div className="text-break">
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p className="text-name">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </div>
      </Carousel.Item>
      <Carousel.Item className="image">
          <img
          className="img-fluid"
          src={Dump2}
        />
        <div className="text-break">
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p className="text-name">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </div>
      </Carousel.Item>
      <Carousel.Item className="image">
          <img
          className="img-fluid"
          src={Dump3}
        />
        <div className="text-break">
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p className="text-name">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </div>
      </Carousel.Item>
    </Carousel>
    </div>
    )
}
export default Body