import React from 'react'

export interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    children: React.ReactNode[] | React.ReactNode
}


const Button = ({onClick, children}: ButtonProps) => {
  return (
    <button onClick={(event) => onClick && onClick(event)}>
        {children}
    </button>

  )
}

export default Button