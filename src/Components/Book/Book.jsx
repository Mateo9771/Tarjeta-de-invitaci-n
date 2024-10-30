import React from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from '../../assets/Novios/img1.webp';
import img2 from '../../assets/Novios/img2.webp';
import img3 from '../../assets/Novios/img3.webp';
import img4 from '../../assets/Novios/img4.webp';
import img5 from '../../assets/Novios/img5.webp';
import img6 from '../../assets/Novios/img6.webp';
import './Book.css'

const Book = () => {
  const Novios = [img1, img2, img3, img4, img5, img6];

  return (
    <div className='book-container'>
    {Novios.map((img, index) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      return (
        <div
          ref={ref}
          key={index}
          className={`image-container ${inView ? (index % 2 === 0 ? 'imgLeft roll' : 'imgRight roll') : ''}`}
        >
          <img src={img} width={200} alt={`Novios ${index + 1}`} />
        </div>
      );
    })}
  </div>
);
};
export default Book;
