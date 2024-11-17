import React, { useState, useRef } from 'react';
import './PlayButton.css';
import { FaPlay, FaPause } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const PlayButton = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop />
      <button className="floating-button" onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </>
  );
};

export default PlayButton;
