import React from 'react'
import './BodyText.scss'

export interface BodyTextProps {
    children: React.ReactNode[] | React.ReactNode
}

const BodyText = ({children}: BodyTextProps) => {
  return (
    <p className='vbodytext'>{children}</p>
  )
}

export default BodyText