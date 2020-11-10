import React from "react";
import ITask from "../../interfaces/ITask";
import Task from "../task";
import TaskCounter from "../taskCounter";
import "./style.css";

interface IProps {
  tasks: ITask[];
}

const TaskList: React.FC<IProps> = ({ tasks }) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
