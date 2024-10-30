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
        <h2>22/03/2025</h2>
       </div>
       <div className='ContainerNames'>
       <h2><span className='Init'>N</span>icolas</h2> 
       <h1>&</h1> 
       <h2><span className='Init'>M</span>elanie</h2>
       </div>
       
       <ScrollIndicator className="Indicator"/>
       
    </div>
    </div>
  )
}

export default FrontPage

