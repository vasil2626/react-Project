import React from "react";
import Styles from './Footer.module.css';
import {  MDBContainer } from "mdbreact";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";


function FooterPage() {
    return (
        <div className={Styles.footer}>
          
                <div>
                    <a href='https://www.linkedin.com' target='blank'><FaLinkedin/> linkedin</a>
          
                </div>
                <div>
                      <a href='https://github.com/vas2609/react-Project' target='blank'><GoMarkGithub/> Github</a>
                </div>
            
    
      <div >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a href="https://naughty-pasteur-2c5259.netlify.app/"  target='blank'> <GrReactjs/> </a>
        </MDBContainer>
      </div>
  
          

        </div>
    );
}

export default FooterPage;