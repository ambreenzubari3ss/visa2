"use client"
import React from 'react'
import './style.modules.css'

const InputField = ({fieldName, placeHolder}) => {
  return (
    <div className='flex flex-col items-start gap-2 w-full'>
      <div>
        <span className='text highlight-color'>
          {fieldName}
        </span>
      </div>
      <div className='w-full'>
        <input className='input-text' type='text' placeholder={placeHolder} />
      </div>
    </div>
  )
}

export default InputField
