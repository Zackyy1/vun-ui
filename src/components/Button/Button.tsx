import React from 'react'
import './Button.scss'

export interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    children: React.ReactNode[] | React.ReactNode
    className?: string
    id?: string
}


const Button = ({onClick, children, className, id}: ButtonProps) => {
  return (
    <button className={`vbutton ${className ? className : ''}`} id={id} onClick={(event) => onClick && onClick(event)}>
        {children}
    </button>

  )
}

export default Button