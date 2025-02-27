"use client";
import React from "react";
import "./style.modules.css";

interface InputFieldProps {
  fieldName: string;
  placeHolder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField = ({
  fieldName,
  placeHolder,
  type = "text",
  onChange,
  onBlur,
  error,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div>
        <span className="text highlight-color">{fieldName}</span>
      </div>
      <div className="w-full">
        <input
          className={` input-text ${
            error
              ? "focus:border-danger focus:outline-none focus:ring-1 focus:ring-danger border-danger;"
              : "focus:border-[#42DA82] focus:outline-none focus:ring-1 focus:ring-[#42DA82];"
          }
            

          `}
          type={type}
          name={fieldName.toLowerCase()}
          placeholder={placeHolder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && (
          <span className="text-danger text-sm mt-1 block">{error}</span>
        )}
      </div>
    </div>
  );
};

export default InputField;
