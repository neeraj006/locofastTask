import React from "react";
import Modal from "../Modal/Modal";
import DispatchDetail from "../DispatchDetail/DispatchDetail";

export default function OrderDetailModal({ isModalOpen, closeModal, data }) {
  const { dispatchNumber, transactions } = data;
  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <h1>Dispatch details {dispatchNumber}</h1>
      <DispatchDetail transactions={transactions} />
    </Modal>
  );
}
