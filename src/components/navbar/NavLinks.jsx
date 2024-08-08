import { Link, useLocation } from "react-router-dom";

const links = [
  { title: "about", url: "/about" },
  { title: "portfolio", url: "/portfolio" },
  { title: "contact us", url: "/contact-us" },
];

const NavLinks = ({ isOpen }) => {
  const { pathname } = useLocation();

  return (
    <ul
      className={`${
        isOpen ? "h-48 pt-2 px-4 pb-10" : "h-0"
      } transition-all duration-150 absolute top-full left-0 w-full overflow-hidden flex-col -translate-y-1  items-start flex gap-8 bg-mainColor md:items-center md:static md:flex-row md:justify-end md:py-0 md:h-fit`}
    >
      {links.map((link) => (
        <li key={link.title}>
          <Link
            to={link.url}
            className={`text-base font-medium uppercase px-3 py-1 inline-block rounded-lg transition-all duration-200 ${
              link.url === pathname && "bg-greenColor"
            }`}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
