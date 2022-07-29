import React from "react";
import "../Body/Body.css"
import Container from 'react-bootstrap/Container';
import "../Survey/Survey.css"
import "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Survey = () => {
    return(
        <div className="body">
            <Container style={{backgroundColor:"#FFFEFE"}}>
                <p className="fs-4">Survey Kepuasan Pelanggan</p>
            </Container>
            <br></br>
            <br></br>
            <Stack direction="horizontal" gap={5}>
      <div className="bg-light border" style={{borderRadius:"1.125rem"}}>Kuisioner</div>
      <div className="bg-light border" style={{borderRadius:"1.125rem"}}>Hasil Kuisioner</div>
    </Stack>
            <br></br>
            <br></br>
            <Container style={{backgroundColor:"#FF5454BD", display:"grid"}}>
                <p className="fs-4">Petunjuk :</p>
                <br></br>
                <br></br>
                <p className="fs-6">1. Isi kuisioner dengan mengisi jawaban yang sesuai dengan keadaan anda saat ini.</p>
                <p className="fs-6">2. Setelah mengisi kuisioner, klik tombol "Submit" untuk mengirimkan kuisioner anda.</p>
                <p className="fs-6">3. Hasil kuisioner akan ditampilkan setelah anda mengirimkan kuisioner.</p>
                </Container>

            <br></br>
            <br></br>
            <Container style={{display:"contents"}}>
                <form>
                    <div className="form-group">
                        <ul><label htmlFor="exampleFormControlSelect1">1. Keramahan dan kesopanan petugas pengaduan dalam memberikan pelayanan ?</label></ul>
                    <li className="li-question"><input type="radio" name ="question1" value="1"></input>
                        <label>1</label></li> 
                        <li className="li-question"><input type="radio"  name ="question1" value="1"></input>
                        <label>2</label></li>
                        <li className="li-question"><input type="radio" name ="question1" vvalue="1"></input>
                        <label>3</label></li>
                        <li className="li-question"><input type="radio" name ="question1" value="1"></input>
                        <label>4</label></li>
                        <li className="li-question"><input type="radio" name ="question1" value="1"></input>
                        <label>5</label></li>
                       
                        </div>
                        <Link to='/feedback'><Button variant="primary" size="sm" style={{backgroundColor:"green"}}>Submit</Button></Link>
                </form>
                </Container>

        </div>
    )
}
export default Survey;