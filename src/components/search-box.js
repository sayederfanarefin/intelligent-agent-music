import React, { useState } from "react";
import VoiceIcon from "./voice-icon";

import { Form, InputGroup, Spinner } from "react-bootstrap";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = (props) => {
  const [query, setQuery] = useState("");
  const [typing, setTyping] = useState(false);

  const { transcript, listening } = useSpeechRecognition();
  const onSearch = () => {
    SpeechRecognition.stopListening();
    if (transcript.trim()) {
      props.search(transcript);
    }
    props.search(query);
  };

  return (
    <InputGroup className="mb-0" style={{ width: "20rem" }}>
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
        onKeyDown={() => setTyping(true)}
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
          <Spinner animation="border" />
        ) : (
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        )}
      </InputGroup.Text>
    </InputGroup>
  );
};
export default SearchBox;
