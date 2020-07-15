import React from 'react';
import { Button,Navbar,Nav,Form,NavDropdown } from 'react-bootstrap';
import {Link,browserHistory,IndexRoute,BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class Topnav extends React.Component{
    state = {
        navBackground: "white",
        border1: "none"
      };
    
      componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 70 ? "transparent" : "white";
          const border = window.scrollY > 70 ? "3px solid black" : " none"
    
          this.setState({ navBackground: backgroundcolor,border1:border });
        });
      }

    render(){
        return (
            <div>
            <Router browserHistory>
            <Navbar className='navs' style={{
            backgroundColor: `${this.state.navBackground}`,
            borderBottom: `${this.state.border1}`
          }} fixed="top" >
                <Navbar.Brand >
                <Link to="/Home" className='logo'>LMAS</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav>
                            <Nav.Link><Link className="link" to="/Home"><Button  onClick="window.location.href=window.location.href" >Home</Button></Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/Project"><Button  onClick="window.location.href=window.location.href" >Projects</Button></Link></Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Router>
        </div>
        );
    }
}

export default Topnav;
//<Nav.Link to={'/Home'}>Home</Nav.Link>
/*<Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Scratch</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem >Signup</NavItem>
                    <NavItem >Login</NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>*/