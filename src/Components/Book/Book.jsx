import React from 'react'
import { Rotate } from 'react-reveal';
import img1 from '../../assets/Novios/img1.webp'
import img2 from '../../assets/Novios/img2.webp'
import img3 from '../../assets/Novios/img3.webp'
import img4 from '../../assets/Novios/img4.webp'
import img5 from '../../assets/Novios/img5.webp'
import img6 from '../../assets/Novios/img6.webp'

const Book = () => {

    const Novios = [img1, img2, img3, img4, img5, img6]

    const leftVariant = {
        hidden: { rotate: -90, opacity: 0 },
        visible: { rotate: 0, opacity: 1, transition: { duration: 3 } }
      };
    
      const rightVariant = {
        hidden: { rotate: 90, opacity: 0 },
        visible: { rotate: 0, opacity: 1, transition: { duration: 3 } }
      };
      
  return (

   <div className=''>
      {Novios.map((img, index) => (
        // Usamos condicionalmente Rotate con 'left' o 'right' según el índice
        index % 2 === 0 ? (
          <Rotate left key={index} duration={3000}>
            <div className='imgLeft'>
              <img src={img} width={200} alt={`Novios ${index + 1}`} />
            </div>
          </Rotate>
        ) : (
          <Rotate right key={index} duration={3000}>
            <div className='imgRight'>
              <img src={img} width={200} alt={`Novios ${index + 1}`} />
            </div>
          </Rotate>
        )
      ))}
   </div>

  )
}

export default Book
