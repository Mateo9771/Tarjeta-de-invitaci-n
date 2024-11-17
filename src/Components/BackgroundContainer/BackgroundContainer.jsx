import React from 'react'
import './BackgroundContainer.css'
import FrontPage from '../FrontPage/FrontPage'
import ContainerDetail from '../ContainerDetails/ContainerDetails'
import CountdownTimer from '../CountDownTimer/CountDownTimer'
import Alianza from '../TipeCap/Alianza'
import PlayButton from '../PlayButton/PlayButton'
import song from '../../assets/Arruinarse.mp3'

const BackgroundContainer = () => {
  
  const targetDate = '2025-03-22T00:00:00'; 
  
  return (
    <div className='backgroundContainer col-12'>
          <PlayButton audioSrc={song}/>
      <FrontPage/>
      <div className='count col-12'>
      <CountdownTimer targetDate={targetDate}/>
      </div>
      <Alianza/>
      <div className='frase col-12'>
        <p>
          "Empieza un nuevo capitulo de nuestras vidas y queremos que formes parte del primero"
        </p>
      </div>
      <ContainerDetail/>
    </div>
  )
}

export default BackgroundContainer
