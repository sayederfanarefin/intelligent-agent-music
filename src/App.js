
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CodeForm  from  "./components/code-form"
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><CodeForm /></Col>
      </Row>
    </Container>
  );
}

export default App;
