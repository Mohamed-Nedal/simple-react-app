import { FaPlus } from "react-icons/fa";

const SlideItem = ({ img, openSlide }) => {
  return (
    <div
      className="group w-full overflow-hidden rounded-lg relative cursor-pointer"
      onClick={() => openSlide(img)}
    >
      <img src={img} alt="portfolio-slide" className="w-full h-full" />

      <div className=" absolute inset-0 w-full h-full bg-bgOverlay text-white text-5xl transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <FaPlus />
      </div>
    </div>
  );
};

export default SlideItem;
