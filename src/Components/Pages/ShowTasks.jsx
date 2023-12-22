/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const ShowTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/todo/tasks?email=${user?.email}`);
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/todo/tasks${id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5">
        <div className="grid grid-cols-1 gap-2">
          <div className="border-2 p-5 px-5 pr-1 rounded-md">
            <p className="text-4xl font-semibold mb-5">TO-DO</p>
            {tasks.map((task) => (
              <div key={task._id} className="border-2 p-5 mr-5 rounded-md">
                <p className="mt-1 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                  <span className="font-bold">Task Name:</span> {task.name}
                </p>

                <p className="mt-1 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                  {" "}
                  <span className="font-bold">Description:</span>{" "}
                  {task.description}
                </p>

                <p className="mt-1  p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                  <span className="font-bold">Priority:</span> {task.priority}
                </p>

                <p className="mt-1 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                  <span className="font-bold"> Deadline: </span>
                  {task.deadline}
                </p>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="btn mt-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="border-2 p-5 rounded-md">
          <p className="text-4xl font-semibold mb-5 text-blue-400">Ongoing</p>
        </div>
        <div className="border-2  p-5 rounded-md">
          <p className="text-4xl font-semibold text-teal-600">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default ShowTasks;
