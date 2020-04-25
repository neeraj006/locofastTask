import React, { useState } from "react";
import OrderDetailModal from "./components/OrderDetailModal/OrderDetailModal";
import IMAGES from "./utils/Images";
import "./App.scss";

function App() {
  const [isModalOpen, setModal] = useState(false);
  const data = {
    dispatchNumber: "PO123456",
    transactions: [
      {
        image: IMAGES.FEDEX,
        date: "August 8 , 2019",
        dispatchedVia: "Fedex",
        trackingId: "123456789",
        quantity: "12",
        boxes: "2",
        orderComplete: true
      },
      {
        image: IMAGES.DTDC,
        date: "August 9 , 2019",
        dispatchedVia: "DTDC",
        trackingId: "123456780",
        quantity: "12",
        boxes: "2",
        orderComplete: false
      },
      {
        image: IMAGES.BLUEDART,
        date: "August 12 , 2019",
        dispatchedVia: "BLUEDART",
        trackingId: "123456781",
        quantity: "12",
        boxes: "2",
        orderComplete: false
      },
      {
        image: IMAGES.FEDEX,
        date: "August 11 , 2019",
        dispatchedVia: "Fedex",
        trackingId: "123456782",
        quantity: "12",
        boxes: "2",
        orderComplete: false
      },
      {
        image: IMAGES.DTDC,
        date: "August 10 , 2019",
        dispatchedVia: "DTDC",
        trackingId: "123456783",
        quantity: "12",
        boxes: "2",
        orderComplete: false
      }
    ]
  };
  return (
    <div className="App full-height">
      <OrderDetailModal
        isModalOpen={isModalOpen}
        closeModal={() => setModal(false)}
        data={data}
      />
      <button className="modal-btn" onClick={() => setModal(true)}>
        Open Modal
      </button>
    </div>
  );
}

export default App;
