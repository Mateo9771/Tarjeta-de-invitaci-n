import React from 'react'
import './FrontPage.css'
import ScrollIndicator from '../ScrollIndicador/ScrollIndicador'

const FrontPage = () => {
  return (
    <div className='container col-12'>

    <div className="banner" id='Inicio'>
      
       <div className='frontPageCenter'>

       <div className='containerDate'>
        <h2>22/03/2025</h2>
       </div>

       <div className='containerNames'>

       <h2><span className='init'>N</span>icolas</h2> 
       <h1>&</h1> 
       <h2><span className='init'>M</span>elanie</h2>
       
       </div>
       
       </div>

       
       
       
       <ScrollIndicator className="indicator"/>
       
    </div>
    </div>
  )
}

export default FrontPage

