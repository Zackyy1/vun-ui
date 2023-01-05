import React from 'react'
import './BodyText.scss'

export interface BodyTextProps {
    children: React.ReactNode[] | React.ReactNode
    className?: string
    id?: string
}

const BodyText = ({children, className, id}: BodyTextProps) => {
  return (
    <p className={`vbodytext ${className ? className : ''}`} id={id}>{children}</p>
  )
}

export default BodyText