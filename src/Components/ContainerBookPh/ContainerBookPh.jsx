import './ContainerBookPh.css'
import React from 'react'
import casorio1 from '../../assets/casorio.webp';
import casorio2 from '../../assets/casorio.webp';
import casorio3 from '../../assets/casorio.webp';
import casorio4 from '../../assets/casorio.webp';
import casorio5 from '../../assets/casorio.webp';


const ContainerBookPh = () => {

    const images = [casorio1, casorio2, casorio3, casorio4, casorio5];
    
  return (
    <div className='ContainerBook col-12' id='Fotografias'>
         <div className='image-gallery col-9'>
                {images.map((src, index) => (
                    <div className='image-frame' key={index}>
                        <img src={src} alt={`Foto ${index + 1}`} className='image' />
                    </div>
                ))}
            </div>
       
    </div>
  )
}

export default ContainerBookPh
