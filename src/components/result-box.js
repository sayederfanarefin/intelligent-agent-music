import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ResultBox(props) {
  const [speaking, setSpeaking] = useState(false);
  const [cleanedData, setCleanedData] = useState([]);
  const msg = new SpeechSynthesisUtterance();
  const speak = () => {
    setSpeaking(true);
    msg.text = cleanedData;
    window.speechSynthesis.speak(msg);
    setTimeout(() => {
      setSpeaking(false);
    }, cleanedData.split(" ").length * 270);
  };

  useEffect(() => {
    window.speechSynthesis.addEventListener("end", (event) => {
      setSpeaking(false);
    });
    return () => {
      window.removeEventListener("finish", setSpeaking(false));
    };
  }, [setSpeaking]);

  const clean = () => {
    if (props.data.match(/^.*((unknown)|(problem)|(error)).*$/gm)) {
      return setCleanedData(["Please try a new query"]);
    }
    const reg = /(?<=[X|Y] = )(.*?)(?=<)/gm;

    return setCleanedData(Array.from(props.data?.match(reg) ?? []));
  };

  useEffect(() => {
    clean(props.data);
  }, [props.data]);

  return (
    <Form className="p-3">
      <h4 className="font-monospace ">Answer</h4>

      <div className="overflow-auto" style={{ height: "50vh" }}>
        {cleanedData.map((x) => (
          <p className="text-capitalize">{x}</p>
        ))}
      </div>
      <Button variant="info" className="m-2 float-end" onClick={() => speak()}>
        <FontAwesomeIcon
          className={speaking ? "speaking" : ""}
          icon={faVolumeHigh}
        />
      </Button>
    </Form>
  );
}

export default ResultBox;
