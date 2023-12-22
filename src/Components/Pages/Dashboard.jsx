import CreateTasks from "./Createtasks";
import ListTasks from "./ListTasks";
import ShowTasks from "./ShowTasks";
const Dashboard = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center justify-evenly">
        <div className="border-2 p-5 rounded-md mr-7">
          <CreateTasks></CreateTasks>
        </div>
        <div>
          <ShowTasks></ShowTasks>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
