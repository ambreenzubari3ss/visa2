"use client";
import React from "react";
import "./style.modules.css";

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button = ({ 
  buttonText, 
  onClick, 
  type = "button",
  disabled = false 
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-primary ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
