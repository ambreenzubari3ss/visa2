"use client"
import React from 'react'
import './style.modules.css'

const Button = ({ buttonText }) => {
    return (
        <>
            <button className="btn-primary">{buttonText}</button>
        </>
    )
}

export default Button