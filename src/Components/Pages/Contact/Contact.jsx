import React from 'react';
import Style from './Contact.module.css';
import { Form, Col, Button } from 'react-bootstrap';


export default function Contacts() {
    return (
        <div className={Style.contact}>
            <Form.Group>
                <Form.Row>
                    <Form.Label column="lg" lg={2}>
                        Name
                </Form.Label>
                    <Col>
                        <Form.Control size="lg" type="text" placeholder="Your name" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column lg={2}>
                        Last Name
                </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Your Last Name" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column="sm" lg={2}>
                        Email
                    </Form.Label>
                    <Col>
                        <Form.Control size="sm" type="email" placeholder="Your Email" />
                        <br />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Details</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <br />
                        <Button  variant="success"> Send </Button>
                    </Col>


                </Form.Row>
            </Form.Group>

        </div>
    );
};