import React from "react";
import ITask from "../../interfaces/ITask";
import Task from "../task";
import TaskCounter from "../taskCounter";
import "./style.css";

interface IProps {
  tasks: ITask[];
  getTasks: () => void;
}

const TaskList: React.FC<IProps> = ({ tasks, getTasks }) => {
  return (
    <div className="taskList">
      <TaskCounter number={tasks.length} />
      <div className="tasksContainer">
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            isDone={task.isDone}
            id={task.id}
            getTasks={getTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
