import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => setCode(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={() => submit()}>
        Submit
      </Button>
    </Form>
  );
}

export default CodeForm;
