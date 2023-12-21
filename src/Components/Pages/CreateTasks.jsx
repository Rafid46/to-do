import { useForm } from "react-hook-form";

const CreateTasks = ({ tasks, setTasks }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Tasks
          </label>
          <input
            placeholder="name"
            {...register("name")}
            type="text"
            className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <button className="inline-block shrink-0 rounded-md border  bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTasks;
