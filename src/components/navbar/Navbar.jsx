import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./navLinks";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  return (
    <nav
      className={`navbar navbar-expand-lg bg-mainColor text-white fixed top-0 left-0 z-[99999999] w-full duration-500 transition-all ${
        scroll > 25 ? "py-5" : "py-8"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <NavLinks isOpen={isOpen} />
          <button
            onClick={toggleNavbar}
            className="md:hidden flex items-center justify-center w-9 h-9 border border-gray-500 rounded-lg text-xl text-gray-500"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
