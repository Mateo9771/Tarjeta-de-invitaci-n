import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className='Footer col-12'>
       <div className='BlockFooter'>
        <Link className='Link' to='Inicio' smooth={true} duration={500}>Inicio</Link>
        <Link className='Link' to='About' smooth={true} duration={500}>N&M</Link>
        <Link className='Link' to='Ceremonia' smooth={true} duration={500}>Ceremonia</Link>
        <Link className='Link' to='Fiesta' smooth={true} duration={500}>Fiesta</Link>
        <Link className='Link' to='Fotografias' smooth={true} duration={500}>Book</Link> 
        </div>
    </div>
  )
}

export default Footer