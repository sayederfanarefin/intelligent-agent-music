import React, { useEffect, useState } from "react";
import VoiceIcon from "./voice-icon";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fuzzysort from "fuzzysort";
import { InputGroup, Spinner } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { TERMS } from "../terms";

const SearchBox = (props) => {
  const [query, setQuery] = useState("bandmate");
  // const [typing, setTyping] = useState(true);

  const { transcript, listening } = useSpeechRecognition();
  const onSearch = () => {
    console.log(query);
    SpeechRecognition.stopListening();
    props.search(query?.label ?? query);
  };

  useEffect(() => {
    if (!listening && !query) {
      setQuery(transcript.replace(".", ""));
    }
  }, [listening, query, transcript]);

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
            // setTyping(false);
            setQuery("");
          }}
        />
      </InputGroup.Text>

      {/* <Form.Control
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
      /> */}

      <Typeahead
        id="Search-for"
        defaultSelected={[query]}
        style={{ width: "25rem" }}
        size="lg"
        className="bg-white"
        onChange={(selected) => {
          if (selected[0]) {
            setQuery(selected[0]);
            // onSearch();
          }
        }}
        onInputChange={(selected) => {
          // setTyping(true);
          if (selected) {
            setQuery(selected);
          }
        }}
        selected={[query]}
        options={fuzzysort
          .go(
            query,
            TERMS.map((x) => x.label)
          )
          .map(({ score, target }) => ({ label: target }))}
        filterBy={() => true}
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
