import React, { PureComponent } from 'react';
import Style from './Contact.module.css';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { sendMessage } from '../../../store/actions'



class Contacts extends PureComponent {

    state = {
        formerror: '',
        name: '',
        email: '',
        message: ''
    }


    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }



    handleclick = () => {

        let { name, email, message } = this.state;
        
        if (! email || ! name || ! message) {
            this.setState({
                formerror: "! the introduction field must not be empty"
            })
        }
        let mesagdata = {
            name,
            email,
            message
        }
        this.props.sendMessage(mesagdata)
        
   
    }

    componentDidUpdate(prevProps){
 
       if(!prevProps.sendForm &&  this.props.sendForm){
         this.setState({ 
            name: '',
            email: '',
            message: ''
           })
       }
       

      
    }

    render() {
        let{formerror} = this.state
        return (
            <div className={Style.contact}>
                <h1>Contact us</h1>
                {
                    !! formerror &&
                    <h4 className={Style.error}>{formerror}</h4>
                }
                <Form.Group>
                    <Form.Row>
                        <Col>
                            Name
                    <Form.Control
                                onChange={this.handleChange}
                                name='name'
                                value={this.state.name}
                                size="sm"
                                type="text"
                            />
                            <br />
                    Email
                    <Form.Control
                                onChange={this.handleChange}
                                name='email'
                                value={this.state.email}
                                size="sm"
                                type="text" />
                            <br />
                            <Form.Group
                                controlId="exampleForm.ControlTextarea1">
                                <Form.Label>
                                    Mesge
                             </Form.Label>
                                <Form.Control
                                    onChange={this.handleChange}
                                    name='message'
                                    value={this.state.message}
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>
                            <br />
                            <Button
                                variant="success"
                                onClick={this.handleclick}
                            >
                                Send
                         </Button>
                        </Col>

                    </Form.Row>
                </Form.Group>

            </div>
        )



    };
}



function MapStateToProps(state) {
   
    return {
        sendForm: state.sendForm
    };
}

let mapDispatchToprops = {
    sendMessage
}

export default connect(MapStateToProps, mapDispatchToprops)(Contacts);