import React from "react";
import IMAGES from "../../utils/Images";
import "./CompleteOrder.scss";

export default function CompleteOrder() {
  return (
    <div className="complete-container">
      <div className="complete-text">
        <h2>Order complete!</h2>
        <h2 className="complete-colored">
          This order has been fully dispatched
        </h2>
      </div>
      <div className="complete-logo">
        <img src={IMAGES.ORDER_COMPLETE} alt="ORDER COMPLETE"></img>
      </div>
    </div>
  );
}
