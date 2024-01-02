/* eslint-disable no-unused-vars */

import useTanQuery from "../Hooks/useTanQuery";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import MainShowtask from "./MainShowtask";
import { useDrop } from "react-dnd";
import { toast } from "react-toastify";
import ani from "../../assets/animation/todo.json";
import ani2 from "../../assets/animation/ongoing.json";
import ani3 from "../../assets/animation/completed.json";
import Lottie from "lottie-react";
import banner from "../../assets/images/14547779_rm222-mind-14 (1).jpg";
import banner2 from "../../assets/images/28428229_rm222-mind-24 (1).jpg";
import banner3 from "../../assets/images/rm222-mind-20 (1).jpg";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ShowTasks = ({ status }) => {
  const axiosPublic = useAxiosPublic();
  const { tasks, refetch } = useTanQuery();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    axiosPublic.patch(`/todo/tasks/patch/${id}`, { status }).then((res) => {
      refetch();
      toast.success("Updated");
    });
  };
  console.log(tasks);
  const toDo = tasks.filter((task) => task.status === status);
  console.log(toDo);
  return (
    <div ref={drop} className={`${isOver ? "" : ""} max-w-screen-xl mx-auto`}>
      <div className="shadow-lg backdrop-blur-sm bg-opacity-20 bg-white w-[430px] gap-5 border-gray-400 rounded-md p-2">
        <div className="flex items-center justify-evenly mb-5 min-h-[70px]">
          <h1
            className={`text-3xl text-center font-bold my-2 ${
              status === "Ongoing"
                ? "text-pink-500"
                : status === "Complete"
                ? "text-teal-300"
                : "text-white"
            }`}
          >
            {status}
          </h1>
          {/* lottie animation */}
          {status === "Todo" ? (
            <div className="w-[100px]">
              <Lottie animationData={ani} loop={true}></Lottie>
            </div>
          ) : status === "Ongoing" ? (
            <div className="w-[100px]">
              <Lottie animationData={ani2} loop={true}></Lottie>
            </div>
          ) : (
            <div className="w-[70px]">
              <Lottie animationData={ani3} loop={true}></Lottie>
            </div>
          )}
        </div>
        {toDo.map((task, index) => (
          <MainShowtask
            key={index}
            task={task}
            refetch={refetch}
            status={status}
          ></MainShowtask>
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
