import '../components/Header.css';
import { 
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Badge,
    Form,
    DropdownButton,
    Dropdown,
    Button,
    ButtonGroup,
    SplitButton,
    InputGroup, } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";


const HeaderComponent = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light">
            <Container>   
          <Navbar.Brand href="/">
            <img
              src="/dlogo.jpg"
              width="50"
              height="40"
              
            />
          </Navbar.Brand>
              <LinkContainer to="/">
              <Navbar.Brand href="#home" className="component-name" ><h3>DreeBlissa Events&nbsp;&nbsp;</h3></Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <span className="ms-5">
                  <LinkContainer to="/">
                  <Nav.Link href="#home">HOME</Nav.Link>
                  </LinkContainer>
                  </span>
                  <NavDropdown title="EVENTS" id="basic-nav-dropdown">
                  
                  <div>
        {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="light"
              title={`Event photography`}
            >
              <Dropdown.Item eventKey="12"  as={Link}
                    to="/service/event">Pre-Wedding</Dropdown.Item>
              <Dropdown.Item eventKey="22"  as={Link}
                    to="/service/event">Post-Wedding </Dropdown.Item>
              <Dropdown.Item eventKey="32"></Dropdown.Item>
            </SplitButton>
          ),
        )}
      </div>
                  <div>
        {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="light"
              title={`Wedding Package`}
            >
              
                   
              <Dropdown.Item eventKey="2"  as={Link}
                    to="/service/wedding">Engagement</Dropdown.Item>
              <Dropdown.Item eventKey="1" as={Link}
                    to="/service/wedding">Mehndi</Dropdown.Item>
              <Dropdown.Item eventKey="2" as={Link}
                    to="/service/wedding">Haldi</Dropdown.Item>
              <Dropdown.Item eventKey="1" as={Link}
                    to="/service/wedding">Reception</Dropdown.Item>
              <Dropdown.Item eventKey="1" as={Link}
                    to="/service/wedding">Sangeeth</Dropdown.Item>
            </SplitButton>
          ),
        )}
      </div>
      
      <div>
        {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="light"
              title={`Birthday Events`}
            >
                    
              <Dropdown.Item eventKey="41" as={Link}
              to="/service/birthday">Kids</Dropdown.Item>
              <Dropdown.Item eventKey="11" as={Link}
              to="/service/birthday">Adults</Dropdown.Item>
            
            </SplitButton>
          ),
        )}
      </div>
      <div>
        {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="light"
              title={`Official Events`}
            >
              <Dropdown.Item eventKey="12"  as={Link}
                    to="/service/corporate">Corporate Party</Dropdown.Item>
              <Dropdown.Item eventKey="22" as={Link}
                    to="/service/corporate">Celebrations Funs </Dropdown.Item>
              <Dropdown.Item eventKey="32" as={Link}
                    to="/service/corporate">Business Events</Dropdown.Item>
            </SplitButton>
          ),
        )}
      </div>
      <div>
        {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="light"
              title={`Invitations`}
            >
              <Dropdown.Item eventKey="33" as={Link}
                    to="/service/einvites">Invitations</Dropdown.Item>
              <Dropdown.Item eventKey="13" as={Link}
                    to="/service/einvites">E-invitations</Dropdown.Item>
              <Dropdown.Item eventKey="23" as={Link}
                    to="/service/einvites">Gift cards</Dropdown.Item>
              <Dropdown.Item eventKey="33"></Dropdown.Item>
            </SplitButton>
          ),
        )}
      </div>
      <div>
        {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="light"
              title={`Family Party`}
            >
              <Dropdown.Item eventKey="14" as={Link}
                    to="/service/family">Parent's Day</Dropdown.Item>
              <Dropdown.Item eventKey="24" as={Link}
                    to="/service/family">Anniversary Party</Dropdown.Item>
              <Dropdown.Item eventKey="34" as={Link}
                    to="/service/family">Gifts and Return Gifts Ideas</Dropdown.Item>
            </SplitButton>
          ),
        )}
      </div>
      <div>
        {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="light"
              title={`Party Games`}
            >
              <Dropdown.Item eventKey="14" as={Link}
                    to="/service/party">GAMES</Dropdown.Item>
              <Dropdown.Item eventKey="16">Balloon duel</Dropdown.Item>
              <Dropdown.Item eventKey="26">Before and After</Dropdown.Item>
              <Dropdown.Item eventKey="36">Freeze Dance</Dropdown.Item>
              <Dropdown.Item eventKey="26">Pass the Parcel</Dropdown.Item>
              <Dropdown.Item eventKey="36">Musical Chairs</Dropdown.Item>
            </SplitButton>
          ),
        )}
      </div> 
      <div>
        {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="light"
              title={`Tips and Ideas`}
            >
              <Dropdown.Item eventKey="15"  as={Link}
                    to="/service/tips">Event Planning</Dropdown.Item>
              
            </SplitButton>
          ),
        )}
      </div>
      
                    {/* <NavDropdown.Item 
                    eventKey="/service/design"
                    as={Link}
                    to="/service/design">WEDDING PLAN
                    
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item 
                    eventKey="/service/plan"
                    as={Link}
                    to="/service/plan">
                      BIRTHDAY PARTY
                    </NavDropdown.Item>
                    <NavDropdown.Item 
                    eventKey="/service/exp"
                    as={Link}
                    to="/service/exp">FAMILY PARTY</NavDropdown.Item>
                    <NavDropdown.Item 
                    eventKey="/service/design"
                    as={Link}
                    to="/service/design">CORPORATE EVENTS</NavDropdown.Item>
                    <NavDropdown.Item 
                    eventKey="/service/design"
                    as={Link}
                    to="/service/design">E-INVITES</NavDropdown.Item>
                    <NavDropdown.Item 
                    eventKey="/service/design"
                    as={Link}
                    to="/service/design">TIPS AND IDEAS</NavDropdown.Item>
                    <NavDropdown.Item 
                    eventKey="/service/out"
                    as={Link}
                    to="/service/out">
                    PARTY GAMES
                    </NavDropdown.Item>*/}
                  </NavDropdown> 
                
                  <LinkContainer to="/prot">
                  <Nav.Link>PORTFOLIO</Nav.Link></LinkContainer>
                
               {/*<LinkContainer to="/test">
                  <Nav.Link>TESTIMONIALS</Nav.Link></LinkContainer>  */}   
                  
                  <LinkContainer to="/about">
                  <Nav.Link>ABOUT</Nav.Link></LinkContainer>
                  <LinkContainer to="/contact">
                  <Nav.Link>CONTACT</Nav.Link></LinkContainer>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        );
    
    }

export default HeaderComponent;
