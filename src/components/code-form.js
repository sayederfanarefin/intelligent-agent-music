import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { python } from "@codemirror/lang-python";

function CodeForm(props) {
  const [code, setCode] = useState("");

  const submit = () => {
    props.setLoading(true);
    fetch("http://localhost:8001/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response
            .json()
            .catch(() => {
              // Couldn't parse the JSON
              throw new Error(response.status);
            })
            .then(({ message }) => {
              // Got valid JSON with error response, use it
              throw new Error(message || response.status);
            });
        }
        return response.json();
      })
      .then((data) => {
        props.setData(data);
        console.log(data);
        props.setLoading(false);
      });
  };

  return (
    <Form className="p-3">
      <h5 className="font-monospace">Enter your Code here</h5>
      <CodeMirror
        value={code}
        height="60vh"
        extensions={[python()]}
        options={{
          theme: "dracula",
        }}
        onChange={(val) => setCode(val)}
      />
      <Button
        variant="primary"
        className="m-2 float-end"
        disabled={props.loading}
        onClick={!props.loading ? submit : null}
      >
        {props.loading ? "Processing..." : "Submit"}
      </Button>
    </Form>
  );
}

export default CodeForm;
