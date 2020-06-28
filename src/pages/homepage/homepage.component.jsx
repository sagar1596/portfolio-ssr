import React from 'react';
import './homepage.styles.css';

// import Head from '../../components/head/head.component';
import { HOMEPAGE_TEXT } from './homepage.data';
import Home from '../../components/head/head.component';

import { Card } from 'react-bootstrap';
import { LightSpeed, Zoom } from 'react-reveal';

import CustomButton from '../../components/custom-button/custom-button.component';
import Head from '../../components/head/head.component';



class HomePage extends React.Component  {

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div id="home" className="homepage page">
           
           <Head 
            title="Homepage - Sagar Bhat" 
            description="This is the homepage of sagarbhat.com." />

                <Card className="bg-custom text-black p-4">
                    <div className="card-text">
                        <LightSpeed left cascade duration={2000}>
                            <div>
                                <div>{HOMEPAGE_TEXT.line1}<span className="name">{HOMEPAGE_TEXT.name}</span></div>
                                <div>{HOMEPAGE_TEXT.line2}</div>
                                <div>{HOMEPAGE_TEXT.line3}</div>
                            </div>
                        </LightSpeed>
                    </div>
                    <Zoom delay={2000} duration={1000}>
                        <CustomButton onClick={() => this.props.history.push({pathname: "/about"})}>Contact Me</CustomButton>
                    </Zoom>
                </Card>
            </div>
        )
    }
    
}


export default HomePage;