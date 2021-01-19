import React, {useState} from 'react';
import Style from './Contact.module.css';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { senMessage } from '../../../store/actions'


 function Contacts(props) {

    let[values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    let handleChange = (event) =>{
        let{ name, value} = event.target;
        setValues({
            ...values,
            [name]:value
        })
    }


    let message = {...values}

    return (
        <div className={Style.contact}>
            <h1>Contact us</h1>
            <Form.Group>
                <Form.Row>
                    <Col>
                        Name
                        <Form.Control 
                        onChange={handleChange}
                        name='name'
                        size="sm" 
                        type="text" 
                        />
                        <br />
                        Email
                        <Form.Control
                        onChange={handleChange} 
                        name='email'
                        size="sm" 
                        type="text" />
                        <br />
                        <Form.Group 
                        controlId="exampleForm.ControlTextarea1">
                            <Form.Label>
                                 Mesge
                                 </Form.Label>
                            <Form.Control 
                            onChange={handleChange}
                            name='message'
                            as="textarea"
                             rows={3}
                             />
                        </Form.Group>
                        <br />
                        <Button 
                        variant="success"
                        onClick={() =>  props.senMessage(message) }
                        >
                             Send 
                             </Button>
                    </Col>

                </Form.Row>
            </Form.Group>

        </div>
    );
};

let mapDispatchToprops ={
    senMessage
}

export default connect(null, mapDispatchToprops)(Contacts);