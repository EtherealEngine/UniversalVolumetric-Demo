import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import VolumetricPlayer from "./VolumetricPlayer";

function App() {
  const [playerVisible, setPlayerVisible] = useState(false)

  return (
    <div className="App">
      <button
        className={"button player-toggle"}
        onClick={() => setPlayerVisible(!playerVisible)}>{playerVisible? "off" : "on"}</button>
      {!playerVisible ? null : <VolumetricPlayer
        manifestFilePath={"http://localhost/example.manifest"}
        meshFilePath={"http://localhost/example.drcs"}
        videoFilePath={"http://localhost/example.mp4"}
        style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh'}}
      />}
    </div>
  )
}

export default App
