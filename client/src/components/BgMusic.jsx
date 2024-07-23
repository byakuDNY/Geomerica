import React, { useState, useRef } from "react";
import volumeOnBtn from "../assets/volume-on-btn.png";
import volumeOffBtn from "../assets/volume-off-btn.svg";

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
        <img
          src={isPlaying ? volumeOnBtn : volumeOffBtn}
          alt="volume-on-and-off-btn"
        />
      </button>
    </div>
  );
};

export default BgMusic;
