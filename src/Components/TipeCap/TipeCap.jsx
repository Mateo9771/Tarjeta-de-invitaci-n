import React from 'react'
import './TipeCap.css'
import CountDownTimer from '../CountDownTimer/CountDownTimer';

const TipeCap = () => {

  const targetDate = '2025-02-15T00:00:00';
  return (
    <div className='TipeCapContainer'>
        <CountDownTimer targetDate={targetDate} />
        <div className="alianzas">

        </div>
    </div>
  )
}

export default TipeCap