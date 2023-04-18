import React, { useState } from "react";
import VoiceIcon from "./voice-icon";

import { Form, InputGroup, Spinner } from "react-bootstrap";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = (props) => {
  const [query, setQuery] = useState("bandmate(X,Y)");
  const [typing, setTyping] = useState(true);

  const { transcript, listening } = useSpeechRecognition();
  const onSearch = () => {
    SpeechRecognition.stopListening();
    if (transcript.trim()) {
      props.search(transcript);
    }
    props.search(query);
  };

  return (
    <InputGroup
      className="mb-0"
      style={{ width: "35rem", maxWidth: "80%" }}
      size="lg"
    >
      <InputGroup.Text id="basic-addon1">
        <VoiceIcon
          listening={listening}
          sr={SpeechRecognition}
          startLis={() => {
            setTyping(false);
            setQuery("");
          }}
        />
      </InputGroup.Text>

      <Form.Control
        aria-label="search"
        aria-describedby="basic-addon1"
        placeholder="Search Here"
        onKeyDown={() => {
          if (!typing) {
            setQuery(transcript);
            setTyping(true);
          }
        }}
        value={typing ? query : transcript}
        onChange={(e) => {
          setTyping(true);
          setQuery(e.target.value);
        }}
      />

      <InputGroup.Text
        id="basic-addon1"
        className="cursor-pointer"
        onClick={onSearch}
      >
        {props.loading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        )}
      </InputGroup.Text>
    </InputGroup>
  );
};
export default SearchBox;
