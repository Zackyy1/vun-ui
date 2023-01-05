import React from 'react'
import './Container.scss'

export interface ContainerProps {
    children: React.ReactNode[] | React.ReactNode
    className?: string
    id?: string
}


const Container = ({children, className, id}: ContainerProps) => {
  return (
    <div className={`vcontainer ${className ? className : ''}`} id={id}>
        {children}
    </div>

  )
}

export default Container