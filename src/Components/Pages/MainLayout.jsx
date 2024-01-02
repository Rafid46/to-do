import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import banner from "../../assets/images/banner.jpg";
import banner2 from "../../assets/images/starry-sky-mountain-background-nature-remixed-media.jpg";
import banner3 from "../../assets/images/stars-1837306_1920 (1).jpg";
import banner4 from "../../assets/images/ara-star-constellation-night-sky-cluster-stars-deep-space-altar-constellation.jpg";

const MainLayout = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";
  return (
    <div>
      <div
        className="bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: isDashboardRoute ? `url(${banner4})` : " ",
        }}
      >
        <div className="max-w-screen-xl mx-auto mb-20">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <div className="mt-60">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
