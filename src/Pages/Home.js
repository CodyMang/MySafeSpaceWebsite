import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div class="container">
            <h1 class="fs-1 fw-bolder">A new way to protect your computer!</h1>
            <Card>
                <Card.Header>What is My Safe Space?</Card.Header>
                <Card.Body>
                    <Card.Text className="p-5">My Safe Space is a cybersecurity hub, the one place to go to for all your security setting and application needs! 
                        Using our application users are able to change password complexity requirements, enable/disable services, add firewall rules, 
                        and change user privileges. My Safe Space also allows users to check for OS and application updates, setup an automatic backup
                        for your pc, and view resources for additional cybersecurity knowledge. <br/><br/> Below are two buttons, the first one is to obtain the 
                        zip file for our application and the second one leads to our GitHub repository for My Safe Space. When you click on either button there 
                        will be instructions on how to properly install My Safe Space on your Linux computer.</Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <hr className="Line"/>
            <div className="Buttons">
                <Button variant="primary" size="lg" className="p-4">Download</Button>
                <a href="https://github.com/PrestonFawcett/MySafeSpace"><Button variant="primary" size="lg" className="p-4">GitHub Repo</Button> </a>
            </div>
            <hr className="Line"/>
            <br/>
            <Card>
                <Card.Header>Why download My Safe Space?</Card.Header>
                <Card.Body>
                    <Card.Text>It's free! Since the application is completely open source, all of our code regarding My Safe Space will be on GitHub where it is 
                        publicly hosted for issues and pull requests. Because it is an open source software, My Safe Space will be following the GNU General Public License v3.0.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;