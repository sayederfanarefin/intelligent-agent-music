import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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

  const clean = (d) => {
    const stringData = JSON.stringify(d);
    console.log(stringData);
    if (stringData.includes("yes")) {
      return ["Yes"];
    }
    if (stringData.includes("no") | stringData.includes("unknown")) {
      return ["No"];
    }
    if (stringData.match(/^.*((problem)|(error)).*$/gm)) {
      return ["Query failed to return and answer/ "];
    }
    const reg = /(?<=[X|Y] = )(.*?)(?=<)/gm;

    return Array.from(stringData?.match(reg));
  };

  useEffect(() => {
    if (!props.loading) {
      const c = clean(props.data).map((x) => x.replace("_", " "));

      setCleanedData(c);
    }
  }, [props.data, props.loading]);

  return (
    <Form className="p-3">
      <h4 className="font-monospace ">Answer</h4>

      <div className="overflow-auto" style={{ height: "50vh" }}>
        {cleanedData?.length
          ? cleanedData.map((x, i) => (
              <Card
                className="text-capitalize m-1"
                key={i + "result-box"}
                style={{ width: "10rem" }}
              >
                <Card.Body>
                  <Card.Text>{x}</Card.Text>
                </Card.Body>
              </Card>
            ))
          : null}
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
