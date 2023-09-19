import React from 'react'

interface ButtonProps {
    onClick: () => void;
    text: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <div className="btn btn-primary btn-sm text-xs modal-close-button font-inter italic mt-2" onClick={onClick}>{text}</div>
  )
}

export default Button