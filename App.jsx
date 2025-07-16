import React, { useContext } from 'react';
import "./App.css";
import va from "./assets/Jarvis_main.jpg";
import { CiMicrophoneOn } from "react-icons/ci";
import { DataContext } from "./context/UserContext.jsx";
import speakimg from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";

function App() {
  const {
    recognition,
    speaking,
    setSpeaking,
    promt,
    response,
    setPromt,
    setResponse
  } = useContext(DataContext);

  return (
    <div className="main">
      <img id="Nexora" src={va} alt="Nexora" />
      <h1>N e x o r a</h1>
      <span>I'M Nexora, your advanced virtual assistant</span>

      {!speaking ? (
        <button
          className="nexora-assistant-button"
          onClick={() => {
            setPromt("Listening ...");
            setSpeaking(true);
            setResponse(false);
            recognition.start();
          }}
        >
          Click here <CiMicrophoneOn />
        </button>
      ) : (
        <div className="response">
          {!response ? (
            <img src={speakimg} alt="Speaking..." id="speak" />
          ) : (
            <img src={aigif} alt="AI Responding" id="aigif" />
          )}
          <p>{promt}</p>
        </div>
      )}
    </div>
  );
}

export default App;
