import React from "react";
import "./Modal.scss";
export default function Modal(props) {
  const { isModalOpen, children, closeModal } = props;
  return (
    isModalOpen && (
      <div className="modal" role="presentation">
        <div className={`modal-content`}>
          {children}
          <button className="close" onClick={closeModal}>
            <span>&#215;</span>
          </button>
        </div>
      </div>
    )
  );
}
