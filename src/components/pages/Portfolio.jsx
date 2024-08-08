import Heading from "../Heading";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import img4 from "../../assets/poert1.png";
import img5 from "../../assets/port2.png";
import img6 from "../../assets/port3.png";
import SlideItem from "../SlideItem";
import { useState } from "react";

const images = [img1, img2, img3, img4, img5, img6];

const Portfolio = () => {
  const [slideImage, setSlideImage] = useState(null);

  const removeSlideImage = () => {
    setSlideImage(null);
  };

  const addSlideImage = (img) => {
    setSlideImage(img);
  };

  return (
    <section className="py-6">
      <div className="container">
        <Heading title="portfolio component" bgWhite />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {images.map((img, index) => (
            <div className="col-span-1" key={index}>
              <SlideItem img={img} openSlide={addSlideImage} />
            </div>
          ))}
        </div>

        {slideImage && (
          <div
            className="fixed inset-0 w-full h-full bg-slideOverlay z-50 flex items-center justify-center"
            onClick={removeSlideImage}
          >
            <img
              src={slideImage}
              alt="photo"
              className="w-full max-w-[600px] rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
