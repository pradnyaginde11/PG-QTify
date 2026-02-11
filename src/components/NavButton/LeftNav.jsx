import React from "react";
// adjust the path based on your project structure
import LeftArrow from "../assets/left.svg";

const LeftNav = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
    >
      {/* Render the imported SVG */}
      <img src={LeftArrow} alt="Previous" style={{ width: 24, height: 24 }} />
    </button>
  );
};

export default LeftNav;