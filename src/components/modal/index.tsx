import React from "react";
import "./style.css";

const Modal: React.FC = ({ children }) => {
  return (
    <div className="modal">
      <div className="modalBackground">{children}</div>
    </div>
  );
};

export default Modal;
