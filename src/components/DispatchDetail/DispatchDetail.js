import React from "react";
import "./DispatchDetail.scss";
import VerticalInfo from "../VerticalInfo/VerticalInfo";
import DownloadButton from "../DownloadButton/DownloadButton";
import CompleteOrder from "../CompleteOrder/CompleteOrder";
import IMAGES from "../../utils/Images";

export default function DispatchDetail({ transactions }) {
  return (
    <React.Fragment>
      {transactions.map(transaction =>
        transaction.orderComplete ? (
          <CompleteOrder key={transaction.trackingId} />
        ) : (
          <React.Fragment>
            <div className="dispatch-container" key={transaction.trackingId}>
              <div className="dispatch-logo">
                <img src={transaction.image} alt="LOGO"></img>
              </div>
              <div className="dispatch-info">
                <h2>
                  Dispatched on {transaction.date} via{" "}
                  {transaction.dispatchedVia}
                </h2>
                <div className="tracking-info">
                  <VerticalInfo
                    label="TrackingId"
                    value={transaction.trackingId}
                  />
                  <VerticalInfo label="Quantity" value={transaction.quantity} />
                  <VerticalInfo
                    label="No. of Boxes"
                    value={transaction.boxes}
                  />
                </div>
                <div className="bills-container">
                  <DownloadButton label="E-way Bill" />
                  <DownloadButton label="Invoice copy" />
                  <DownloadButton label="Packing Lis" />
                  <DownloadButton label="Challan copy" />
                </div>
              </div>
            </div>
            <hr></hr>
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
}
