import React from 'react'
import './ContainerDetail.css'
import Book from './../Book/Book'

const ContainerDetails = () => {

  return (
    <div className='containerDetails col-12'>
        
    <Book/>

        <div className='ceremoniaDetail' id='Ceremonia'>
            <div className='ceremoniaDetailImage1'>

            </div>
            <h1>Ceremonia</h1>
        <div className='detail'>
            <h1>Dia:</h1>
            <h2>Sabado 15 de Febrero - 20H</h2>

        </div>

        <div className='detail'>
        <h1>Dirección:</h1>
        <h2>Calle Falsa 123</h2>
        </div>

        <div className='buttons'>
            <div className='button1'>
        <button>Confirmar Asistencia</button>
            </div>
            <div className='button2'>
        <button>Como llegar</button>
        <button>Agendar</button>
        </div>
        </div>
        </div>

        <div className='ceremoniaDetail' id='Fiesta'>
            <div className='ceremoniaDetailImage2'>

            </div>
        <h1>Fiesta</h1>
        <div className='detail'>
            <h1>Dia:</h1>
            <h2>Sabado 15 de Febrero - 21H</h2>
           
        </div>
        <div className='detail'>
        <h1>Dirección:</h1>
        <h2>Calle Falsa 123</h2>
        </div>
        <div className='buttons'>
        <div className='button1'>
        <button>Confirmar Asistencia</button>
            </div>
            <div className='button2'>
        <button>Como llegar</button>
        <button>Agendar</button>
        </div>
        </div>
        </div>
        <div className='ceremoniaDetailOutfit' id='vestimenta'>

        <div className='detailOutfitImage'>
        </div>
        <div className='detailOutfit'>
        <p>
            Solo la novia va de vestido blanco
        </p>
        </div>
        </div>
    </div>
  )
}

export default ContainerDetails
