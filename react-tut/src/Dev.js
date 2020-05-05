import React, {Component} from 'react';

export class DevDisclaimer extends Component {
    render() {
        return (
            <li><a href="https://github.com/TechPhilDev/Website">Submit DEVELOPMENT issues HERE</a></li>
        )
    }
}

export class DevForm extends Component {
    render() {
        return (
            <>
                <h3>WARNING - YOU ARE VIEWING THE DEVELOPMENT WEBSITE</h3>
                <p>Please submit all issues on the GitHub repository using the link in the NavBar</p>
                <p>If you want to test the contact form that is usually on this page, please click the following link -</p>
                <a href="/contact?live=true" style={{color:"white"}}>or add ?live=true to your URL</a>
            </>
        )
    }
}