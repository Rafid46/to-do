import ShowTasks from "./ShowTasks";

const Heading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ShowTasks
        className="border-2 p-2 min-h-96 min-w-80"
        status={"Todo"}
      ></ShowTasks>

      <ShowTasks
        className="border-2 p-2 min-h-96 min-w-80"
        status={"Ongoing"}
      ></ShowTasks>

      <ShowTasks
        className="border-2 p-2 min-h-96 min-w-80"
        status={"Complete"}
      ></ShowTasks>
    </div>
  );
};

export default Heading;
