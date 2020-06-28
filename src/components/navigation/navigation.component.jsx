import React from 'react';
import './navigation.styles.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({ location }) => {

    const [expanded, setExpanded] = React.useState(false);
    return (
        <Navbar expanded={expanded}
                className="header" collapseOnSelect fixed="top" expand="lg" bg="custom" variant="dark">
                <Navbar.Brand href="/">Sagar Bhat</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded((prevExpanded) => {console.log("vvalue", prevExpanded); return (prevExpanded = !prevExpanded);})} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Link onClick={(event) => {_handleClick(event); setExpanded(false);}} className={`nav-link ${location.pathname==='/' ? 'active' : null}`} to="/">Home</Link>
                        <Link onClick={(event) => {_handleClick(event); setExpanded(false);}} className={`nav-link ${location.pathname==='/professional' ? 'active' : null}`} to="/professional">Experience</Link>
                        <Link onClick={(event) => {_handleClick(event); setExpanded(false);}} className={`nav-link ${location.pathname==='/skills' ? 'active' : null}`} to="/skills">Skills</Link>
                        <Link onClick={(event) => {_handleClick(event); setExpanded(false);}} className={`nav-link ${location.pathname==='/work' ? 'active' : null}`} to="/work">Work</Link>
                        <Link onClick={(event) => {_handleClick(event); setExpanded(false);}} className={`nav-link ${location.pathname==='/about' ? 'active' : null}`} to="/about">Contact Me</Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
    )
}
    

const _handleClick = (e) => {
    Array.from(e.target.parentElement.children).forEach((el) => {
        el.classList.remove('active');
    })
    e.target.classList.add("active");
}

export default Navigation;



