import React from 'react'
import './FrontPage.css'
import ScrollIndicator from '../ScrollIndicador/ScrollIndicador'

const FrontPage = () => {
  return (
    <div>
    <div className="FrontPageContainer" id='Inicio'>
        <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
      
       <div className='FrontPageCenter'>
       
       
       </div>
       <div className='ContainerDate'>
        15/02/2025
       </div>
       <div className='ContainerNames'>
       <h2>Nicolas</h2> 
       <h3>&</h3> 
       <h2>Melanie</h2>
       </div>
       
       <ScrollIndicator className="Indicator"/>
       
    </div>
    </div>
  )
}

export default FrontPage

