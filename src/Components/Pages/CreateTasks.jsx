/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const CreateTasks = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/todo/tasks");
      return res.data;
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    const taskData = {
      email: user?.email,
      name: data.name,
      description: data.description,
      priority: data.priority,
      deadline: data.deadline,
      status: "Todo",
    };
    axiosPublic.post("/todo/tasks", taskData).then((res) => {
      console.log(res.data, "task added");
      reset(), Swal.fire("task added");
      queryClient.invalidateQueries(["tasks"]);
    });
  };

  return (
    <div>
      <div>
        <p className="text-4xl text-start text-white mb-5">Create task</p>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="mb-5">
            <label className="block text-sm font-medium text-white">
              Tasks title
            </label>
            <input
              // onChange={(e) =>
              //   setTask({ ...task, id: uuidv4(), name: e.target.value })
              // }
              {...register("name")}
              type="text"
              className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
            <label className="block text-sm font-medium text-white mt-5">
              Description
            </label>
            <input
              // onChange={(e) =>
              //   setTask({ ...task, id: uuidv4(), name: e.target.value })
              // }
              {...register("description")}
              type="text"
              className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <label className="block text-sm font-medium text-white mt-2 mb-2">
            Priority
          </label>
          <select
            {...register("priority")}
            className="select select-bordered w-60 max-w-xs"
          >
            <option className="text-blue-400">Low</option>
            <option className="text-green-400">Moderate</option>
            <option className="text-orange-400">High</option>
          </select>
          <label className="block text-sm font-medium text-white mt-5 mb-2">
            Deadline
          </label>
          <input
            // onChange={(e) =>
            //   setTask({ ...task, id: uuidv4(), name: e.target.value })
            // }
            {...register("deadline")}
            type="date"
            className="mb-5 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
          <br />
          <button
            type="submit"
            className="inline-block shrink-0 rounded-md  bg-teal-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-blue-500"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTasks;
