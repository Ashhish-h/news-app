import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

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
          <Navbar.Brand href="/" className="fw-bold fs-4 align-items-center">
          <img href="/" src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">

              <Dropdown>
                <Dropdown.Toggle  className="custom-dropdown">Categories</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryClick("world")}>World</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("business")}>Business</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("technology")}>Technology</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>Sports</Dropdown.Item>

                  <Dropdown.Item onClick={() => handleCategoryClick("entertainment")}>Entertainment</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl type="text" placeholder="search" className="me-2 custom-search" name="search" />

              <Button className="btn btn-primary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col xs={12} md={3} className="custom-sidebar-container">
            <h5 className="category-title">Categories</h5>
            <Nav className="flex-column custom-sidebar">
              <Nav.Link onClick={() => handleCategoryClick("world")}>World</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("business")}>Business</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("technology")}>Technology</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("sports")}>Sports</Nav.Link>

              <Nav.Link onClick={() => handleCategoryClick("entertainment")}>Entertainment</Nav.Link>
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
