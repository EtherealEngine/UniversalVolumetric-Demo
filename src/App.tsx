import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import VolumetricPlayer from "./VolumetricPlayer";

function App() {
  const [playerVisible, setPlayerVisible] = useState(false)
  const paths = [
    "http://172.160.10.156:3000/assets/brennan.drcs",
    "http://172.160.10.156:3000/assets/liam_low.drcs",
    "http://172.160.10.156:3000/assets/ohno_jugo_low.drcs"
  ]
  return (
    <div className="App">
      <button
        className={"button player-toggle"}
        onClick={() => setPlayerVisible(!playerVisible)}>{playerVisible? "off" : "on"}</button>
      {!playerVisible ? null : <VolumetricPlayer
        paths = {paths}
        style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh'}}
      />}
    </div>
  )
}

export default App
