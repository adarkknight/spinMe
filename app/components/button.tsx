import React from 'react'

interface ButtonProps {
  onClick: () => void;
  text: string;
}
const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button className="btn btn-primary btn-sm text-xs modal-close-button font-inter italic font-bold" onClick={onClick}>{text}</button>
  )
}

export default Button