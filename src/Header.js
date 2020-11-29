import React, { useState ,useContext} from "react"
import {Navbar , Nav, NavDropdown, Form, FormControl,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from './Context'



function Header (){

    const {inWord} = useContext(Context);

    
    const [text, setText] = useState("");

    function inputClick(){

        inWord();
    }

    return (

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Conutries Information </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    
    </Nav>
    <Form inline>
      <FormControl type="text" onChange={(e) => setText(e.target.value)}  placeholder="Search Country by name" className="mr-sm-2" />
      <Button variant="outline-success"  onClick={()=>inputClick()}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

    )
}

export default Header;