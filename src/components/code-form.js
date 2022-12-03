import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { python } from "@codemirror/lang-python";

function CodeForm() {
  const [code, setCode] = useState("");

  const submit = () => {
    fetch("http://localhost:8001/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
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
        onClick={() => submit()}
      >
        Submit
      </Button>
    </Form>
  );
}

export default CodeForm;
