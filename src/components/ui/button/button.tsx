"use client";
import React from "react";
import "./style.modules.css";

const Button = ({ buttonText, onClick = () => {} }) => {
  return (
    <>
      <button className="btn-primary" onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
