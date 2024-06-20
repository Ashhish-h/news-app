import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" clasName="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">News-App</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">

              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">Categories</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>World</Dropdown.Item>
                  <Dropdown.Item>business</Dropdown.Item>
                  <Dropdown.Item>technology</Dropdown.Item>
                  <Dropdown.Item>sports</Dropdown.Item>
                  <Dropdown.Item>entertainment</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav>

            <Form className="d-flex">
              <FormControl type="text" placeholder="search" className="me-2" name="search" />

              <Button variant="outline-primary" type="submit">Submit</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link>world</Nav.Link>
              <Nav.Link>business</Nav.Link>
              <Nav.Link>sports</Nav.Link>
              <Nav.Link>technology</Nav.Link>
              <Nav.Link>entertainment</Nav.Link>
            </Nav>   
          </Col>
          <Col xs={12} md={9}>
            News
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
