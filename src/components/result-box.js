import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ResultBox(props) {
  const now = 60;

  return (
    <Form className="p-3">
      <h5 className="font-monospace">Answer</h5>
      {/* {Object.entries(props.data).map(([k, v]) => (
        <p>
          <span>{k}</span>
          <span>{v}</span>
        </p>
      ))} */}
      {props.data}
      {/* <ProgressBar now={now} label={`${now}%`} /> */}
      <Button variant="info" className="m-2 float-end">
        Copy
      </Button>
    </Form>
  );
}

export default ResultBox;
