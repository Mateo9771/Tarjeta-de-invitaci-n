import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import throttle from 'lodash.throttle';
import img1 from '../../assets/Novios/img1.webp';
import img2 from '../../assets/Novios/img2.webp';
import img3 from '../../assets/Novios/img3.webp';
import img4 from '../../assets/Novios/img4.webp';
import img5 from '../../assets/Novios/img5.webp';
import img6 from '../../assets/Novios/img6.webp';
import './Book.css';

const Book = () => {
  // Memoizamos la lista de imágenes para evitar recrearla en cada render
  const Novios = useMemo(() => [img1, img2, img3, img4, img5, img6], []);

  const [index, setIndex] = useState(0);

  // Función para pre-cargar imágenes
  const preLoadImages = (images) => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  // Pre-cargar imágenes al inicio
  useEffect(() => {
    preLoadImages(Novios);
  }, []); // Dependencias vacías porque Novios no cambiará

  // Usamos setTimeout en lugar de setInterval para optimizar la animación
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Novios.length);
    }, 3700);
    return () => clearTimeout(timeout);
  }, [index, Novios.length]);

  // Optimizar el evento de scroll para evitar que afecte al rendimiento
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log('Scrolled');
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='book-container'>
      <AnimatePresence mode='wait'>
        <motion.img
          key={Novios[index]}
          src={Novios[index]}
          alt={`Imagen ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className='book-image'
        />
      </AnimatePresence>
    </div>
  );
};

export default Book;


