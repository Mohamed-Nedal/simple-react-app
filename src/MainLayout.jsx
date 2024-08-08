import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const MainLayout = () => {
  return (
    <Fragment>
      <div className="pt-24">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default MainLayout;
