import React from 'react'
import './FrontPage.css'
import ScrollIndicator from '../ScrollIndicador/ScrollIndicador'

const FrontPage = () => {
  return (
    <div>
    <div className="FrontPageContainer">
        <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
       <div className='FrontPageCenter'>
       <div className='ContainerDate'>
        15/02/2025
       </div>
       <h2>Pablo</h2> 
       <h3>&</h3> 
       <h2>Lucas</h2>
       </div>
       
       <ScrollIndicator className="Indicator"/>
       
    </div>
    </div>
  )
}

export default FrontPage

