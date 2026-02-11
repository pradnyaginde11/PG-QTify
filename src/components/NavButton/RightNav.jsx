import React from "react";
// adjust the path based on your project structure
import RightArrow from "../assets/right.svg";

const RightNav = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
    >
      {/* Render the imported SVG */}
      <img src={RightArrow} alt="Next" style={{ width: 24, height: 24 }} />
    </button>
  );
};

export default RightNav;