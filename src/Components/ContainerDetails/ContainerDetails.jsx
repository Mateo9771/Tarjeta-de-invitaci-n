import React from 'react'
import './ContainerDetail.css'
import Book from './../Book/Book'

const ContainerDetails = () => {

  return (
    <div className='containerDetails col-12'>
        
    <Book/>

        <div className='ceremoniaDetail' id='Ceremonia'>
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
    </div>
  )
}

export default ContainerDetails
