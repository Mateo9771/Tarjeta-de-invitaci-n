import './ContainerBookPh.css'
import React from 'react'
import casorio1 from '../../assets/Novios/img2.webp';
import casorio2 from '../../assets/Novios/img1.webp';
import casorio3 from '../../assets/Novios/img6.webp';
import casorio4 from '../../assets/Novios/img4.webp';
import casorio5 from '../../assets/Novios/img3.webp';

const ContainerBookPh = () => {

    const images = [casorio1, casorio2, casorio3, casorio4, casorio5, casorio1, casorio2, casorio3, casorio4, casorio5];
    
  return (
    <div className='ContainerBook col-12' id='Fotografias'>
      <div className='Slider'>
         <div className='image-gallery col-9'>
                {images.map((src, index) => (
                    <div className='image-frame' key={index}>
                        <img src={src} alt={`Foto ${index + 1}`} className='image' />
                    </div>
                ))}
            </div>
            </div>
    </div>
  )
}

export default ContainerBookPh
