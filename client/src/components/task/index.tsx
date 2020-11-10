import React, { useState } from "react";
import ITask from "../../interfaces/ITask";
import "./style.css";
import Modal from "../modal";
import axios from "axios";

const Task: React.FC<ITask> = ({ id, title, isDone, getTasks }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const completeTask = async (id: string, title: string) => {
    axios({
      method: "put",
      url: "http://localhost:4000/tasks",
      data: {
        title,
        id,
        isDone: true,
      },
    })
      .then((data) => console.log("data: ", data))
      .catch((error) => console.error(error))
      .finally(() => {
        getTasks();
        closeModal();
      });
  };
  const incompleteTask = async (id: string, title: string) => {
    axios({
      method: "put",
      url: "http://localhost:4000/tasks",
      data: {
        title,
        id,
        isDone: false,
      },
    })
      .then((data) => console.log("data: ", data))
      .catch((error) => console.error(error))
      .finally(() => {
        getTasks();
        closeModal();
      });
  };

  return (
    <>
      <div className={`card ${isDone && "completed"}`} onClick={openModal}>
        <p>{title.length > 30 ? title.slice(0, 30) + "..." : title}</p>
      </div>
      {isOpen && (
        <Modal>
          <div className="modalContent">
            <button className="closeButton" onClick={closeModal}>
              X
            </button>
            <p>
              {`Task #${id.length > 8 ? id.slice(0, 8) + "..." : id} - ${
                title.length > 30 ? title.slice(0, 30) + "..." : title
              }`}
            </p>
            {!isDone && (
              <button
                className="completedButton"
                onClick={() => completeTask(id, title)}
              >
                Completed
              </button>
            )}
            {isDone && (
              <button
                className="incompletedButton"
                onClick={() => incompleteTask(id, title)}
              >
                Incompleted
              </button>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Task;
