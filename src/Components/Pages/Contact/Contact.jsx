import React from 'react';
import Style from './Contact.module.css';
import { Form, Col, Button } from 'react-bootstrap';


export default function Contacts() {
    return (
        <div className={Style.contact}>
            <Form.Group>
                <Form.Row>
                    <Col>
                        Name
                        <Form.Control size="sm" type="text" />
                        <br />
                        Email
                        <Form.Control size="sm" type="text" />
                        <br />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Mesge</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <br />
                        <Button variant="success"> Send </Button>
                    </Col>

                </Form.Row>
            </Form.Group>

        </div>
    );
};