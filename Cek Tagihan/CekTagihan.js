import React from "react";
import '../Body/Body.css';
import Container from 'react-bootstrap/Container';
import Air from "../Assets/air2.png";
import Image from 'react-bootstrap/Image';  
import ReCAPTCHA from "react-google-recaptcha";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


const CekTagihan = () => {
    function onChange(value) {
        console.log('Captcha value:', value);
      }
    return(
        <div className="body">
            <Container>
                <Image className="img-fluid" src={Air} style={{maxWidth:"20%"}}></Image>
    <Card className="text-center">
      <Card.Header style={{backgroundColor: "#7CB1EF"}}>Cek Tagihan Air Anda Disini</Card.Header>
      <Card.Body>
        <Card.Title>Masukkan 6 Digit No. Pelanggan :</Card.Title>
        <br></br>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Control type="input" placeholder="Contoh 124719" maxLength={6} style={{backgroundColor:"#D9D9D9"}}/>
        <br></br>
        <ReCAPTCHA
        sitekey="6Le1x8QgAAAAAOxBXoYKu0frUK5RRwA8-U0yhPgH"
        onChange={onChange}/>
      </Form.Group>
       
      </Form>
        <Button variant="primary">Check</Button>
      </Card.Body>
    </Card>
            </Container>
        </div>

    )
}
export default CekTagihan;