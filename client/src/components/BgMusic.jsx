import React, { useState, useRef } from "react";
import volume from "../assets/volume.png";
import mute from "../assets/mute.svg";

const BgMusic = ({ bgMusic, pos }) => {
  const [isPlaying, setIsPlaying] = useState(true);
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
    <div className={`absolute p-1 ${pos}`}>
      <audio loop autoPlay ref={audioRef} src={bgMusic}></audio>
      <button onClick={togglePlayPause}>
        <img className="" src={isPlaying ? volume : mute} alt="volume-icon" />
      </button>
    </div>
  );
};

export default BgMusic;
