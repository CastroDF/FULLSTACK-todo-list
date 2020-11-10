import React from "react";
import ITasksCounterProps from "../../interfaces/ITasksCounterProps";
import "./style.css";

const TaskCounter: React.FC<ITasksCounterProps> = ({ number }) => {
  return (
    <div className="counterContainer">
      <span className="counter">Number of tasks: {number}</span>
    </div>
  );
};

export default TaskCounter;
