import React from 'react'
import './ScrollIndicador.css'
import { VscGitFetch } from "react-icons/vsc";
import { Link } from 'react-scroll';

const ScrollIndicator = () => {
  return (
    <div className="ScrollIndicator">
      <div className="Arrow Bounce">
      <Link to='Information' smooth={true} duration={500}><VscGitFetch size='24px' color='#fff'/></Link>
      </div>
    </div>
  )
}

export default ScrollIndicator