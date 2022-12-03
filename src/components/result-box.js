import ProgressBar from "react-bootstrap/ProgressBar";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function ResultBox() {
  const now = 60;
  return (
    <Form className="p-3">
      <h5 className="font-monospace">Stats</h5>
      <Table striped bordered hover style={{ height: "55vh" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <ProgressBar now={now} label={`${now}%`} />
      <Button variant="info" className="m-2 float-end">
        Copy
      </Button>
    </Form>
  );
}

export default ResultBox;
