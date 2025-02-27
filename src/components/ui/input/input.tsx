"use client"
import React from 'react'
import './style.modules.css'

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
  error
}: InputFieldProps) => {
  return (
    <div className='flex flex-col items-start gap-2 w-full'>
      <div>
        <span className='text highlight-color'>
          {fieldName}
        </span>
      </div>
      <div className='w-full'>
        <input
          className={`input-text ${error ? 'border-danger' : ''}`}
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
  )
}

export default InputField
