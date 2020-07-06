import React from 'react';
import './work.styles.css';
import Head from '../../components/head/head.component';
import { Card, Accordion } from 'react-bootstrap';
import Site from '../../assets/site.png';
import { Fade, Zoom } from 'react-reveal';
import CustomButton from '../../components/custom-button/custom-button.component';

class WorkPage extends React.Component {
    constructor() {
        super();
        this._handleGoToSite = this._handleGoToSite.bind(this);
        this._handleGoToSource = this._handleGoToSource.bind(this);
    }
    
    render() {
        return (
            <div id="work" className="work page">
                <Head 
                    title="Works - Sagar Bhat"
                    description="Works - This page lists work that is out from Sagar." />
                <Fade bottom>
                    <h2>Work</h2>
                </Fade>
                <Card style={{width: '73%'}}>
                    <Zoom>
                        <div className="image-container">
                            <Card.Img variant="top" src={Site} />
                            <div className="overlay">
                                <div className="text">
                                    <CustomButton onClick={this._handleGoToSite}>Go to Site</CustomButton>
                                    <CustomButton onClick={this._handleGoToSource}>Go to Source</CustomButton>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Fade bottom>
                        <Card.Body>
                            <Card.Title>Details</Card.Title>
                            <div className="details-text">
                            <Accordion>
                                <Card>
                                    
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                        Features
                                    </Accordion.Toggle>
                                   
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <ul>
                                            <li>Fully equiped Homepage</li>
                                            <li>Category, Device Listing Pages</li>
                                            <li>Sign-in/Sign out using local auth or Google</li>
                                            <li>Add to Cart feature with Header Mini Cart</li>
                                            <li>Cart Page with test Payment feature with Stripe</li>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                        Technologies
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ul>
                                            <li>ReactJS</li>
                                            <li>Redux</li>
                                            <li>Firebase Store and Firebase Auth</li>
                                            <li>Stripe API</li>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <div className="button-container-mobile">
                                <CustomButton onClick={this._handleGoToSite}>Go To Site</CustomButton>
                                <CustomButton onClick={this._handleGoToSource}>Go to Source</CustomButton>
                            </div>
                            </div>
                        </Card.Body>
                    </Fade>
                </Card>
            </div>
        )
    }

    _handleGoToSite = () => window.open("//neosoft-ecom.herokuapp.com/");
    _handleGoToSource = () => window.open('//github.com/sagar1596/neosoft-ecom');
} 



export default WorkPage;