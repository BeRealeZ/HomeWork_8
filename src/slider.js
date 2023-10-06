import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css"


const Slider = () => {
  return (
    <section id="slider">
      <h1>Красивые Пейзажи</h1>
      <Carousel className="carousel">
        <div>
          <img
            src="https://cs13.pikabu.ru/post_img/big/2023/02/11/8/1676122311140068707.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cs14.pikabu.ru/post_img/big/2023/02/11/8/167612231212624465.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cs13.pikabu.ru/post_img/big/2023/02/11/8/167612231217674764.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
