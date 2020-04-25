import React from "react";
import "./DownloadButton.scss";
import IMAGES from "../../utils/Images";

export default function DownloadButton({ label }) {
  return (
    <a
      href={`${process.env.PUBLIC_URL}/dummy.pdf`}
      download
      className="download-anchor"
    >
      <button className="download-btn">
        {label}
        <img src={IMAGES.DOWNLOAD} alt="download"></img>
      </button>
    </a>
  );
}
