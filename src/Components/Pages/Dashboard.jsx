import CreateTasks from "./Createtasks";
import { IoIosArrowDropright } from "react-icons/io";
import Heading from "./Heading";
// import { useLocation } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";
import { IoIosAddCircleOutline } from "react-icons/io";

const Dashboard = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto"
      // style={{
      //   backgroundImage: `url(${banner})`,
      //   backgroundSize: "cover",
      // }}
    >
      <div className="flex items-center justify-evenly">
        <div className="">
          <div className="">
            {/* Page content here */}
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn drawer-button rounded-full bg-white z-50 rounded-tr-none rounded-br-none"
              style={{
                position: "fixed",
                right: "0px",
                bottom: "30px",
              }}
            >
              <span className="text-3xl">
                <IoIosAddCircleOutline />
              </span>
              create
            </button>
          </div>
          <CreateTasks></CreateTasks>
        </div>
        <Heading></Heading>
      </div>
    </div>
  );
};

export default Dashboard;
