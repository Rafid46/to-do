import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <span className="text-7xl font-extrabold bg-gradient-to-r from-teal-300 via-blue-500 to-blue-500 text-transparent bg-clip-text typed">
              Elevate Your Productivity
            </span>{" "}
            <br />{" "}
            <span className="text-7xl font-extrabold bg-gradient-to-r from-teal-300 via-teal-500 to-blue-500 text-transparent bg-clip-text typed">
              Your Gateway to a More Organized and Focused Life!
            </span>
            <br />
            {/* button */}
            <Link to="/login">
              <button className="learn-more batton mt-5">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Let's explore</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
