import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import Style from './About.module.css';


function AboutUs() {
    return (
        <div className={Style.about}>
            <Jumbotron fluid>
                <Container>
                    <h1>Hello</h1>
                    <p>
                        this application is provided for creating different tasks and details about it<br/>
                        <span className={Style.paragraf}>
                        !!! Attention
                        this application is for educational purposes only
                        and you are not advised to keep the information it may contain personal data
                        otherwise the application developer will not be responsible for your data
                        </span>
                      
                    </p>
                </Container>
            </Jumbotron>
        </div>

    );
}



export default AboutUs;