import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class Header extends React.Component {
  render() {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <span style={{paddingLeft: '1em'}}>FNO - Urgent</span>
                </Navbar.Brand>
                <Nav>
                    <LinkContainer to="/Domu">
                        <NavItem eventKey={1}>Domu</NavItem>
                        <Link to="/domu">About</Link>
                    </LinkContainer>
                    <LinkContainer to="/Pacienti">
                        <NavItem eventKey={2}>Pacienti</NavItem>
                        <Link to="/pacienti">About</Link>
                    </LinkContainer>
                    <LinkContainer to="/Tagy">
                        <NavItem eventKey={2}>Tagy</NavItem>
                        <Link to="/tagy">About</Link>
                    </LinkContainer>
                </Nav>
                
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Logout</NavItem>
            </Nav>
        </Navbar>
    );
  }
}