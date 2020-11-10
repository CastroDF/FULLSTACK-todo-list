import React from "react";
import "./index.css";
import ITask from "./interfaces/ITask";
import TaskList from "./components/tasklist";

function App() {
  const tasks: ITask[] = [
    {
      title: "Go work",
      isDone: true,
      id: "1",
    },
    {
      title: "Eat",
      isDone: false,
      id: "2",
    },
    {
      title: "Go home",
      isDone: false,
      id: "3",
    },
    {
      title: "Do homework",
      isDone: false,
      id: "4",
    },
    {
      title: "Go to the gym",
      isDone: false,
      id: "5",
    },
    {
      title: "Play games",
      isDone: false,
      id: "6",
    },
  ];

  return (
    <div className="app">
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
