import React from "react";
import Carousel from "better-react-carousel";

const Featured = () => {
  return (
    <div className="carusel">
      <Carousel cols={2} rows={1} gap={10} loop autoPlay="1" showDots="true">
        <Carousel.Item>
          <img
            width="100%"
            src="https://media.giphy.com/media/26xBN6I5tVKveX2wg/giphy.gif"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://media.giphy.com/media/nGEQGzHpvIdi0lGJjn/giphy.gif"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://media.giphy.com/media/rj12FejFUysTK/giphy.gif"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://media.giphy.com/media/13kajTax0GCg0g/giphy.gif"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Featured;
