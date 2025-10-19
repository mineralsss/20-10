// src/AudioPlayer.jsx

import React, { useState, useEffect, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ src, songName, coverImage }) => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.3; // Set default volume to 30%

    const handleTimeUpdate = () => {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    };

    const handleCanPlay = () => {
      // Attempt to play, but catch errors for browsers that block autoplay
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Autoplay was prevented:", error);
        setIsPlaying(false);
      });
    };

    const handleEnded = () => {
      // Loop functionality
      audio.currentTime = 0;
      audio.play();
    };

    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('canplaythrough', handleCanPlay);
      audio.addEventListener('ended', handleEnded);
      audio.load();
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('canplaythrough', handleCanPlay);
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  const togglePlay = () => {
    if (showIndicator) {
      setShowIndicator(false);
    }
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player-container">
      {showIndicator && <div className="play-indicator">✨ Bấm vào đây để nghe nhạc ✨</div>}
      <img src={coverImage} alt={songName} className="audio-cover-image" />
      <div className="audio-controls-wrapper">
        <div className="song-info">
          <span className="song-name">{songName}</span>
        </div>
        <button onClick={togglePlay} className="play-pause-button">
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <div className="audio-progress-bar-container">
          <div className="audio-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <audio ref={audioRef} src={src} playsInline />
    </div>
  );
};

export default AudioPlayer;
