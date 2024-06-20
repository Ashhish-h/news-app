import { useState } from "react";

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

import NewsList from "./Components/NewsList";

function App() {

  const [category, seCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    seCategory(category)
    setSearchTerm("");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">News-App</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">

              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">Categories</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryClick("world")}>World</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("business")}>business</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("technology")}>technology</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>sports</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("entertainment")}>entertainment</Dropdown.Item>

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
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
