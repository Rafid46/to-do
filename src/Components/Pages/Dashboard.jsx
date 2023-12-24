import CreateTasks from "./Createtasks";
import { IoIosArrowDropright } from "react-icons/io";
import Heading from "./Heading";
const Dashboard = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center justify-evenly">
        <div className="">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn drawer-button bg-red-400 h-[200px] p-5"
                style={{
                  position: "fixed",
                  top: "300px",
                  left: "30px",
                }}
              >
                <div className="flex flex-col items-center ">
                  <span className="pb-3 rotate-60">C</span>
                  <span className=" pb-3 rotate-60">R</span>
                  <span className="pb-3 rotate-60">E</span>
                  <span className="pb-3 rotate-60">A</span>
                  <span className="pb-3 rotate-60">T</span>
                  <span className="pb-3 rotate-60">E</span>
                  <IoIosArrowDropright className="text-4xl font-bold text-[#00A9FF]" />
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 pt-10 w-72  min-h-full bg-[#35A29F] bg-opacity-70">
                {/* Sidebar content here */}
                <CreateTasks></CreateTasks>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>
          <ShowTasks></ShowTasks>
        </div> */}

        {/* <Link to="/todo">
          <div>
            <p className="text-4xl bg-slate-500 w-fit p-5">TASKS</p>
          </div>
        </Link> */}
        <Heading></Heading>
      </div>
    </div>
  );
};

export default Dashboard;
