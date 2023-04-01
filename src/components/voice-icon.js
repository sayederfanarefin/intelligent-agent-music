import {
  faMicrophone,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VoiceIcon = (props) => {
  return !props.listening ? (
    <FontAwesomeIcon
      icon={faMicrophone}
      onClick={() => {
        props.sr.startListening();
        props.startLis();
      }}
      className="cursor-pointer"
    />
  ) : (
    //   <button onClick={props.stopListening}>Stop</button>
    //   <button onClick={resetTranscript}>Reset</button>

    <FontAwesomeIcon
      icon={faMicrophoneLines}
      onClick={props.sr.stopListening}
    />
  );
};
export default VoiceIcon;
