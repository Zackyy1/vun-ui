import React from 'react'
import './Button.scss'

export interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    children: React.ReactNode[] | React.ReactNode
}


const Button = ({onClick, children}: ButtonProps) => {
  return (
    <button className='vbutton' onClick={(event) => onClick && onClick(event)}>
        {children}
    </button>

  )
}

export default Button