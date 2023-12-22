import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CreateTasks from "./Createtasks";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList = tasks[result.source.droppableId];
    const destinationList = tasks[result.destination.droppableId];
    const [movedTask] = sourceList.splice(result.source.index, 1);
    destinationList.splice(result.destination.index, 0, movedTask);
    setTasks({ toDo, ongoing, completed });
  };

  const handleAddTask = (taskData) => {
    const newTask = { ...taskData, id: tasks.length + 1 };
    setToDo([...toDo, newTask]);
    setTasks({ toDo, ongoing, completed });
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.reduce(
      (acc, list) => acc.concat(list.filter((task) => task.id !== taskId)),
      []
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="h-[100vh]">
      <CreateTasks onAddTask={handleAddTask} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="lists-container">
          {Object.entries(tasks).map(([listName, list], index) => (
            <Droppable key={index} droppableId={listName}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="task-list"
                >
                  <h2>{listName}</h2>
                  {list.map((task, taskIndex) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={taskIndex}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task-item"
                        >
                          <div>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>Deadline: {task.deadline}</p>
                            <p>Priority: {task.priority}</p>
                          </div>
                          <button onClick={() => handleDeleteTask(task.id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};
export default ListTasks;
