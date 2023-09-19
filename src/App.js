import React, { useState } from 'react';
import './App.css';
import MindARViewer from './mindar-viewer';
//import MindARThreeViewer from './mindar-three-viewer';

function App() {
  const [started, setStarted] = useState("aframe");

  return (
    <div className="App">
        {started === 'aframe' && (
            <div style={{ width: "100vw", height: "100vh" }} className="container">
                <MindARViewer/>
                <video></video>
            </div>
        )}
      {/*<h1>Example React component with <a href="https://github.com/hiukim/mind-ar-js" target="_blank">MindAR</a></h1>

      <div className="control-buttons">
        {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}
        {started === null && <button onClick={() => {setStarted('three')}}>Start ThreeJS version</button>}
        {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
      </div>



      {started === 'three' && (
        <div className="container">
          <MindARThreeViewer />
        </div>
      )}*/}
    </div>
  );
}

export default App;
