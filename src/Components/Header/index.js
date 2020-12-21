import { Navbar, Nav} from "react-bootstrap";
import logo from "./img/wrestling-matters-logo.jpeg"

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Brand Logo
      </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Navbar>
    );
  }
  
  export default Header;
  