import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import "./App.css";
import CodeForm from "./components/code-form";
import ResultBox from "./components/result-box";

function App() {
  return (
    <Container fluid className="overflow-hidden p-0">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container className="font-monospace m-1 p-3">
          <span className="display-5 text-bg-danger">Code Profiler</span>
        </Container>
      </Navbar>
      <Row>
        <Col>
          <CodeForm />
        </Col>
        <Col>
          <ResultBox />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
