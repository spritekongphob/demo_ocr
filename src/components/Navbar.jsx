import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Navbar.css";

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary shadow mb-5 p-4 ">
      <Container className=' bold '>
        <Navbar.Brand >DEMO OCR</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;