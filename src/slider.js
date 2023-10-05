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
            src="https://lh6.googleusercontent.com/cJVy4vk4etKXoT0lvKDVTgcctVaez6f4Im2EM2U4SPomoK84iwdwDJQivZWksR9vAt09DYIjmin19y5EQDmUzh18dCUdXeac8Ts0YDUPusTI3uZmZeqjwqwQp2EPd_IVElBziV9bUrIruQuWyg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://png.pngtree.com/background/20230502/original/pngtree-painting-beautiful-scenery-of-a-lake-with-the-reflection-on-surrounding-picture-image_2500028.jpg"
            alt=""
          />
        </div> 
        <div>
          <img
            src="https://pibig.info/uploads/posts/2021-12/1639029909_1-pibig-info-p-aprel-peizazh-priroda-krasivo-foto-1.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
