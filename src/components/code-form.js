import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CodeForm(props) {
  const [code, setCode] = useState("");

  const submit = () => {
    props.setLoading(true);
    fetch("https://cors-anywhere.herokuapp.com/http://wave.ttu.edu/ajax.php", {
      headers: {
        accept: "/",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest",
      },
      body: `action=getQuery&query=${code}&editor=%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%0A%25%25+Template+for+a+SPARC+file%0A%25%25+Author%3A+%0A%25%25+Description%3A%0A%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%25%0A%0Asorts%0A++++%23people+%3D+%7Bsara%2C+bob%7D.%0Apredicates%0A++++father(%23people%2C+%23people).%0Arules%0A++++father(bob%2C+sara).%0A`,
      method: "POST",
      mode: "cors",
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
      })
      .catch((d) => {
        props.setData(`${d}`);

        props.setLoading(false);
      });
  };

  return (
    <Form className="p-3">
      <h5 className="font-monospace">Enter your Question here</h5>
      <CodeMirror
        value={code}
        height="20vh"
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
