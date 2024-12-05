import React from 'react'
import './ContainerDetail.css'
import Book from './../Book/Book'
import { getEventDetails } from '../../Date'
import { useEffect, useState } from 'react'

const ContainerDetails = () => {
    const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    getEventDetails().then((data) => {
      setEventDetails(data);
    });
  }, []);

  if (!eventDetails) {
    return <div>Cargando detalles...</div>;
  }

  const { ceremonia, fiesta } = eventDetails;
    
  return (
    <div className='containerDetails col-12'>
        
    <Book/>

        <div className='ceremoniaDetail' id='Ceremonia'>
            <div className='ceremoniaDetailImage1'>

            </div>
            <h1>Conferencia</h1>
        <div className='detail'>
            <h1>Dia:</h1>
            <h2>{ceremonia.fecha} - {ceremonia.hora}</h2>

        </div>

        <div className='detail'>
        <h1>Dirección:</h1>
        <h2>{ceremonia.direccion}</h2>
        </div>
        </div>

        <div className='ceremoniaDetail' id='Fiesta'>
            <div className='ceremoniaDetailImage2'>

            </div>
        <h1>Fiesta</h1>
        <div className='detail'>
            <h1>Dia:</h1>
            <h2>{fiesta.fecha} - {fiesta.hora}</h2>
           
        </div>

        <div className='detail'>
        <h1>Dirección:</h1>
        <h2>{fiesta.direccion}</h2>
        </div>
        <div  className='buttons'>
          <button className='button1'><a href="https://docs.google.com/forms/d/e/1FAIpQLScyy8P96GxVcz3hY1XzcwQDtKzjv5B343NSMSf89cAydW9NGA/viewform?usp=sf_link" target='_blank'>Confirmar asistencia</a></button>
          <button className='button1'><a href="https://maps.app.goo.gl/jQsWojByyfa2WcAaA" target='_blank'>Como llegar</a></button>
        </div>
        </div>

        <div className='ceremoniaDetailOutfit' id='vestimenta'>
    
        <div className='detailOutfitImage'>
        </div> 
        <div className='detailOutfit'>
        <p>
        "El evento será un encuentro especial con un código de vestimenta formal y elegante para celebrar este día único."
        </p>
        
        </div>

       
        </div>
    </div>
  )
}

export default ContainerDetails
