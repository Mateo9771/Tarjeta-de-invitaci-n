import React from 'react'
import './ContainerDetail.css'

const ContainerDetails = () => {

  return (
    <div className='ContainerDetails col-12'>
        <div className='CeremoniaDetail col-9' id='Ceremonia'>
            <h1>Ceremonia</h1>
        <div className='Detail'>
            <h1>Dia</h1>
            <p>Sabado 15 de Febrero - 20H</p>
            <button>Agendar</button>
        </div>
        <div className='Detail'>
            <h1>Lugar</h1>
            <p>Salon Escobar</p>
            <button>Confirmar Asistencia</button>
        </div>
        <div className='Detail'>
            <h1>Dirección</h1>
            <p>Calle Falsa 123</p>
            <button>Como llegar</button>
        </div>
        </div>
        <div className='CeremoniaDetail col-9' id='Fiesta'>
        <h1>Fiesta</h1>
        <div className='Detail'>
            <h1>Dia</h1>
            <p>Sabado 15 de Febrero - 21H</p>
            <button>Agendar</button>
        </div>
        <div className='Detail'>
            <h1>Lugar</h1>
            <p>Salon La Plata</p>
            <button>Confirmar Asistencia</button>
        </div>
        <div className='Detail'>
            <h1>Dirección</h1>
            <p>Calle Falsa 123</p>
            <button>Como llegar</button>
        </div>
        </div>
    </div>
  )
}

export default ContainerDetails
