import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'

function App() {
  const playerRef= useRef(null)
  const VideoLink = "http://localhost:8000/uploads/courses/ead6101e-7c28-480a-a894-6eea245d3a53/index.m3u8"

  const videoPlayerOptions ={
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: VideoLink,
        type: "application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
    <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
     
    </>
  )
}

export default App
