import React from "react";
import '../Body/Body.css';
import '././Sejarah.css';
import Dump from "../Assets/dump4.jpg";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sejarah = () => {
    return (
        <div className="body">
            <Container>
                <Row>
                    <Col xs={6}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
            <div className="text-wrap" style={{width: "50rem"}}>Pemerintah berkewajiban menyediakan kebutuhan warganya air bersih, yaitu peran penting 
            dari Perusahaan Daerah Air Minum (PDAM).

            Di Kota Malang perusahaan PDAM saat ini telah berganti nama menjadi Perumda Tugu Tirta. Di usianya yang menginjak 105 tahun.

            Pelayanan air bersih diberikan oleh perusahaan ini untuk mencukupi kebutuhan masyarakat sehari - hari.
            </div>
                    </Col>
                    <Col sm>
            <img className="img-fluid" src={Dump} style={{maxWidth:"60%"}}></img>
                    </Col>
                </Row>
            </Container>
            </div>
    )
}
export default Sejarah;