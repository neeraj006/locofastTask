import React from "react";
import "./VerticalInfo.scss";

export default function VerticalInfo({ label, value }) {
  return (
    <div className="info-container">
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
}
