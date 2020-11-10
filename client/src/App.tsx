import React, { useState, useEffect } from "react";
import "./index.css";
import ITask from "./interfaces/ITask";
import TaskList from "./components/tasklist";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const getTasks = async () => {
    let result: ITask[] = [];
    await axios
      .get("http://localhost:4000/tasks")
      .then((res) => (result = res.data));
    setTasks(result);
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="app">
      <TaskList tasks={tasks} getTasks={getTasks} />
    </div>
  );
}

export default App;
