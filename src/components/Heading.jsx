import { FaStar } from "react-icons/fa6";

const Heading = ({ title, bgWhite }) => {
  return (
    <div>
      <h1
        className={`text-3xl md:text-4xl font-bold uppercase text-center ${
          bgWhite && "text-mainColor"
        }`}
      >
        {title}
      </h1>
      <div
        className={`relative mt-7 mb-14 mx-auto w-48 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-1  after:rounded-lg after:content-[''] ${
          bgWhite ? "after:bg-mainColor" : "after:bg-white"
        }`}
      >
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex items-center justify-center w-12 text-center ${
            bgWhite ? "bg-white text-mainColor" : "bg-greenColor"
          }`}
        >
          <FaStar className="text-lg" />
        </span>
      </div>
    </div>
  );
};

export default Heading;
