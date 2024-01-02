/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { useDrag } from "react-dnd";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { GoUpload } from "react-icons/go";
const MainShowtask = ({ task, refetch }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task);
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(inputValue);
  //   console.log(isDragging);
  const axiosPublic = useAxiosPublic();
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
        axiosPublic.delete(`/todo/tasks/${id}`).then((res) => {
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
  //   update
  const handleUpdate = (id) => {
    axiosPublic.patch(`/todo/tasks/update/${id}`, inputValue).then((res) => {
      console.log(res.data);
      refetch();
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "task name has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    setEditing(false);
  };
  return (
    <div
      ref={(node) => dragPreview(drag(node))}
      className={`rounded-md bg-transparent m-5 border-2 border-gray-300 p-5 pt-5 pb-0${
        isDragging ? "opacity-100" : "opacity-100"
      } cursor-move`}
    >
      <div className="mb-8">
        <h3 className="mt-1 mb-4 p-4 py-2 border-2 rounded-md border-gray-200 text-sm text-gray-100 shadow-sm">
          <span className="font-bold">Name : </span>
          {editing ? (
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
              autoFocus={true}
              className="cursor-pointer p-1 bg-transparent"
              type="text"
              value={inputValue.name}
            />
          ) : (
            <span className="">{task.name}</span>
          )}
        </h3>
        <p className="mt-1 mb-4 p-4 py-2 border-2 rounded-md border-gray-200 text-sm text-gray-100 shadow-sm">
          <span className="font-bold">Description :</span>{" "}
          <div className="flex items-center">
            {editing ? (
              <textarea
                className="textarea w-full cursor-pointer border-black mt-2 text-black"
                type="text"
                value={inputValue.description}
                placeholder="Bio"
                onChange={(e) =>
                  setInputValue({ ...inputValue, description: e.target.value })
                }
              ></textarea>
            ) : (
              <span className="">{task.description}</span>
            )}
          </div>
        </p>
        <p className="mt-1 mb-4 p-4 py-2 border-2 rounded-md border-gray-200 text-sm text-gray-100 shadow-sm">
          <span className="font-bold">DeadLine :</span>{" "}
          {editing ? (
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, deadline: e.target.value })
              }
              className="cursor-pointer bg-transparent"
              type="date"
              value={inputValue.deadline}
            />
          ) : (
            <span>{task.deadline}</span>
          )}
        </p>
        <p className="mt-1 mb-4 p-4 py-2 border-2 rounded-md border-gray-200 text-sm text-gray-100 shadow-sm">
          <span className="font-bold">Priority :</span>{" "}
          {editing ? (
            <select
              onChange={(e) =>
                setInputValue({ ...inputValue, priority: e.target.value })
              }
              type="text"
              value={inputValue.priority}
              className="select select-bordered w-60 max-w-xs cursor-pointer text-black"
            >
              <option className="text-blue-400">Low</option>
              <option className="text-green-400">Moderate</option>
              <option className="text-orange-400">High</option>
            </select>
          ) : (
            <span
              className={`${
                task.priority === "Low"
                  ? "text-blue-600 font-bold"
                  : task.priority === "Moderate"
                  ? "text-green-400 font-bold"
                  : "text-red-600 font-bold"
              }`}
            >
              {task.priority}
            </span>
          )}
        </p>
      </div>
      <div className="flex items-center justify-start mb-5">
        {editing ? (
          <div>
            <button
              type="submit"
              onClick={() => handleUpdate(task._id)}
              className="btn border-2 bg-transparent text-teal-400 mr-1"
            >
              Update
              <GoUpload className="" />
            </button>
            {editing && (
              <button onClick={() => setEditing(false)} className="btn  mr-1">
                cancel
                <MdOutlineCancel className="" />
              </button>
            )}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setEditing(true)}
              className="btn text-teal-400 mr-1 border-2 bg-transparent border-gray-100"
            >
              Edit
              <CiEdit className="" />
            </button>
          </div>
        )}
        <button
          onClick={() => handleDelete(task._id)}
          className="btn mr-1 text-pink-700"
        >
          Delete
          <MdOutlineDeleteOutline className="text-pink-700" />
        </button>
      </div>
    </div>
  );
};

export default MainShowtask;
