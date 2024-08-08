import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="font-bold uppercase text-2xl md:text-3xl text-nowrap"
    >
      Mohamed Nedal
    </Link>
  );
};

export default Logo;
