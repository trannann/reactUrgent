import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class Header extends React.Component {
  render() {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <span style={{paddingLeft: '1em'}}><a href="/Domu" style={{ textDecoration: 'none' }}><font color="white">FNO - Urgent</font></a></span>
                </Navbar.Brand>
                <Nav>
                    <LinkContainer to="/Domu">
                        <NavItem eventKey={1}>Domu</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Pacienti">
                        <NavItem eventKey={2}>Pacienti</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Tagy">
                        <NavItem eventKey={3}>Tagy</NavItem>
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