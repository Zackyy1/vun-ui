import React from 'react'
import './Container.scss'

export interface ContainerProps {
    children: React.ReactNode[] | React.ReactNode
}


const Container = ({children}: ContainerProps) => {
  return (
    <div className='vcontainer'>
        {children}
    </div>

  )
}

export default Container