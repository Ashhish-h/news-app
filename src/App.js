import { useState } from "react";
import "./App.css";

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

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category)
    setSearchTerm("");
  };

  const handleSearch = (event) =>{
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4 custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">News-App</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">

              <Dropdown>
                <Dropdown.Toggle variant="navbar-toggler" className="custom-dropdown">Categories</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryClick("world")}>World</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("business")}>business</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("technology")}>technology</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>sports</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("entertainment")}>entertainment</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl type="text" placeholder="search" className="me-2 custom-search" name="search" />

              <Button className="btn btn-primary"  type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col xs={12} md={3} className="custom-sidebar-container">
            <h5>Categories</h5>
            <Nav className="flex-column custom-sidebar">
              <Nav.Link onClick={() => handleCategoryClick("world")}>world</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("business")}>business</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("technology")}>technology</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("sports")}>sports</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("entertainment")}>entertainment</Nav.Link>
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
