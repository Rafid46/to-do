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
      <div className="w-[430px] gap-5 border-2 border-gray-400 rounded-md p-2">
        <div className="flex items-center justify-evenly mb-5">
          <h1
            className={`text-3xl text-center font-bold my-2 ${
              status === "Ongoing"
                ? "text-pink-700"
                : status === "Complete"
                ? "text-teal-500"
                : ""
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
