import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Dropdown,
  Button,
  InputGroup,
  DropdownButton,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in Shop ..." />
              <Button variant="warning">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin{" "}
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>
      
            <NavDropdown title="Jhon Doe" id="collasible-nav-dropdown">
            <NavDropdown.Item
              eventKey="/user/my-orders"
              as={Link}
              to="/user/my-orders"
            >
              My Orders
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="/user" as={Link} to="/user">
              My Profile
            </NavDropdown.Item>
            <NavDropdown.Item>Logout</NavDropdown.Item>
          </NavDropdown>

          <LinkContainer to="/login">
            <Nav.Link>Login </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>Register </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link> <Badge pill bg="danger">
                2
              </Badge><i className="bi bi-cart4"></i> Cart  
             
              
              </Nav.Link>
          </LinkContainer>
          </Nav>
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
