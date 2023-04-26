import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button style={{ backgroundColor: "#4e73df" }}>
            {" "}
            <i class="bi bi-search"></i>
          </Button>
        </Form>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action2">
              <i class="bi bi-bell-fill" style={{color:"#d1d3e2"}}></i>
            </Nav.Link>
            <Nav.Link href="#action2">
              <i class="bi bi-chat-square-text-fill" style={{color:"#d1d3e2"}}></i>
            </Nav.Link>
            {/* <NavDropdown title="Messages" id="navbarScrollingDropdown">
          
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <b style={{borderLeftColor:"red",borderLeftWidth:1}}></b>
          <Navbar.Text >
            {/* Signed in as: <a href="#login">Mark Otto</a> */}
            Dauglas Mgee <i class="bi bi-person-circle" ></i>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
