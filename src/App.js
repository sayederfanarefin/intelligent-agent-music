import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import CodeForm from "./components/code-form";
import ResultBox from "./components/result-box";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Container fluid className="p-0 app-page">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container className="font-monospace m-1 p-3">
          <span className="text-bg-danger">Music Agent</span>
        </Container>
      </Navbar>
      <Row>
        <Col>
          <CodeForm
            data={data}
            setData={setData}
            loading={loading}
            setLoading={setLoading}
          />
        </Col>
        <Col>
          <ResultBox data={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
