import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mb-20">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
