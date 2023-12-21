import { useState } from "react";
import CreateTasks from "./Createtasks";
import ListTasks from "./ListTasks";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <div className="bg-slate-400 w-fit p-5 max-w-screen-xl mx-auto">
        <CreateTasks tasks={tasks} setTasks={setTasks}></CreateTasks>
      </div>
      <div>
        <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
      </div>
    </div>
  );
};

export default Dashboard;
