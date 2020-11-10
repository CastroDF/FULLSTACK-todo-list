import React, { useState } from "react";
import ITask from "../../interfaces/ITask";
import "./style.css";
import Modal from "../modal";

const Task: React.FC<ITask> = (task: ITask) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`card ${task.isDone && "completed"}`} onClick={openModal}>
        <p>{task.title}</p>
      </div>
      {isOpen && (
        <Modal>
          <div className="modalContent">
            <button className="closeButton" onClick={closeModal}>
              X
            </button>
            <p>{task.title}</p>
            {!task.isDone && (
              <button className="completedButton" onClick={closeModal}>
                Completed
              </button>
            )}
            {task.isDone && (
              <button className="incompletedButton" onClick={closeModal}>
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
