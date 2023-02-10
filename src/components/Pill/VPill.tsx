import React from 'react'
import './Pill.scss'
interface PillProps {
    text: string
}

const VPill = ({text}: PillProps) => {
  return (
    <div className='vpill'>{text}</div>
  )
}

export default VPill