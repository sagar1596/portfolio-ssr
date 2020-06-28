import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            image: this.props.image
        }
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps) {
            this.setState({
                title: nextProps.title,
                description: this.props.description,
                image: nextProps.image
            })
            return true;
        } else {
            return false;
        }
    }

    render() { 
        return (
            <div>
                <Helmet>
                    <title>{this.state.title ? this.state.title : "Welcome to sagarbhat.com"}</title>
                    <meta name="title" content={this.state.title ? this.state.title : "Welcome to sagarbhat.com"} />
                    <meta
                    name="description"
                    content={this.state.description ? this.state.description : "Welcome to sagarbhat.com"}
                    />
                    <meta
                    property="og:title"
                    content={this.state.title ? this.state.title : "Welcome to sagarbhat.com"}
                    />
                    <meta
                    property="og:description"
                    content={this.state.description ? this.state.description : "Welcome to sagarbhat.com"}
                    />
                   
                    <meta property="og:url" content="http://www.sagarbhat.com" />
                    <meta
                    name="twitter:title"
                    content={this.state.title ? this.state.title : "Welcome to sagarbhat.com"}
                    />
                    <meta
                    name="twitter:description"
                    content={this.state.description ? this.state.description : "Welcome to sagarbhat.com"}
                    />
                </Helmet>
            </div>
        );
    }
}

export default Head;