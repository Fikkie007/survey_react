import React from "react";
import { Container, Form, Button,Image } from "react-bootstrap";
import '../Body/Body.css';
import Logo from '.././Assets/air.png';


const Login = () => {
    return(
        <div className="body">
            <Container>
            <Form>
            <center><Image className="roundedCircle" src={Logo} style={{maxWidth:"50%"}}></Image></center>
            <center>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      </center>
        <center>
      <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </center>
        <center>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      </center>
        <center>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </center>
    </Form>
            </Container>
            
        </div>
    )
}
export default Login;