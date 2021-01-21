// import React, { useState, useEffect } from 'react';
// import Style from './Contact.module.css';
// import { Form, Col, Button } from 'react-bootstrap';
// import { connect } from 'react-redux'
// import { sendMessage } from '../../../store/actions'


// function Contacts(props) {

//     let [values, setValues] = useState({
//         name: '',
//         email: '',
//         message: ''

//     })



//     let handleChange = (event) => {
//         let { name, value } = event.target;
//         setValues({
//             ...values,
//             [name]: value,
//         })
//     }



//     let handleclick = () => {

//         let {name, email, message} = values;

//         if (!name && email && message ) {
//             return
//         }
//         let mesagdata = {
//             name,
//             email,
//             message
//         }
//         props.sendMessage(mesagdata)

   
      
//     }

//     useEffect(() =>{
//         console.log(props.sendForm)
//         if(!props.sendForm){
//            return
//         }
//         setValues({
//             ...values,
//             name:'',
//             email: '',
//             message:''
//         })
//     },[])


//     return (
//         <div className={Style.contact}>
//             <h1>Contact us</h1>

//             <Form.Group>
//                 <Form.Row>
//                     <Col>
//                         Name
//                         <Form.Control
//                             onChange={handleChange}
//                             name='name'
//                             value={values.name}
//                             size="sm"
//                             type="text"
//                         />
//                         <br />
//                         Email
//                         <Form.Control
//                             onChange={handleChange}
//                             name='email'
//                             value={values.email}
//                             size="sm"
//                             type="text" />
//                         <br />
//                         <Form.Group
//                             controlId="exampleForm.ControlTextarea1">
//                             <Form.Label>
//                                 Mesge
//                                  </Form.Label>
//                             <Form.Control
//                                 onChange={handleChange}
//                                 name='message'
//                                 value={values.message}
//                                 as="textarea"
//                                 rows={3}
//                             />
//                         </Form.Group>
//                         <br />
//                         <Button
//                             variant="success"
//                             onClick={handleclick}
//                         >
//                             Send
//                              </Button>
//                     </Col>

//                 </Form.Row>
//             </Form.Group>

//         </div>
//     );
// };

// let MapStateToProps = (state) => {
//     return {
//         sendForm: state.sendForm
//     }
// }

// let mapDispatchToprops = {
//     sendMessage
// }

// export default connect(MapStateToProps, mapDispatchToprops)(Contacts);