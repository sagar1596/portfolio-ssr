import React from 'react';
import './footer.styles.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import ReverbIcon from '../../assets/reverbnation.svg'

const Footer = () => (
    <Navbar className="footer" expand="lg" fixed="bottom" variant="light" bg="custom">
        <Container>
            <Nav></Nav>
            <Nav>
                <Nav.Link title="LinkedIn" target="_blank" href="//www.linkedin.com/in/sagarbhatt"><i className="fab fa-linkedin-in"></i></Nav.Link>
                <Nav.Link title="GitHub" target="_blank" href="//github.com/sagar1596"><i className="fab fa-github"></i></Nav.Link>
                <Nav.Link title="Medium" target="_blank" href="//medium.com/@sagar1596"><i className="fab fa-medium-m"></i></Nav.Link>
                <Nav.Link title="Blog" target="_blank" href="//sagarspeaks.blogspot.com"><i className="fab fa-blogger-b"></i></Nav.Link>
                <Nav.Link title="Facebook" target="_blank" href="//www.facebook.com/sagar.bhatt"><i className="fab fa-facebook-f"></i></Nav.Link>
                <Nav.Link title="Twitter" target="_blank" href="//twitter.com/sagar1596"><i className="fab fa-twitter"></i></Nav.Link>
                <Nav.Link title="Instagram" target="_blank" href="//www.instagram.com/thereaper007"><i className="fab fa-instagram"></i></Nav.Link>
                <Nav.Link title="Reverbnation Playlist" target="_blank" href="//www.reverbnation.com/eplay/artist_3446232"><img alt="Reverbnation Playlist" src={ReverbIcon} className="reverb-icon" /></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default Footer;