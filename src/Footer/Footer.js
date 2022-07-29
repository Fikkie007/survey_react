import React from 'react';
import '../Footer/Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBTypography } from "mdbreact";
import ProgressBar from 'react-animated-progress-bar';
import { Globe, PieChart, CodeSquare, TextCenter, AlignCenter} from 'react-bootstrap-icons';
import Person from './../Assets/person.png';
import Call from './../Assets/call.png';
import Question from './../Assets/queston.png';
import Text from "react-bootstrap-text";

const Footer = () => {
    return(
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center">
        <MDBRow>
        <figure className='text-center mb-0'>
      <MDBTypography blockquote>
        <p>Komitmen Pelayanan Kami</p>
      </MDBTypography>
      <figcaption className='blockquote-footer mb-0'>
       Dengan Semangat baru kami terus berupaya memberikan pelayanan terbaik demi terwujudnya pelayanan prima dan profesional
      </figcaption>
    </figure>
        </MDBRow>
      </MDBContainer>
      <br></br>

      <div className='container'> 
        <div>
      <ProgressBar
        width="11.25rem"
        height="0.563rem"
        rect
        fontColor="gray"
        percentage="65"
        rectPadding="1px"
        rectBorderRadius="0.313rem"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
      <div className='fs-10 mb-3'>
        <Globe/>
        Cakupan Layanan
      </div>
      </div>
      <div>
      <ProgressBar
        width="11.25rem"
        height="0.563rem"
        rect
        fontColor="gray"
        percentage="75"
        rectPadding="1px"
        rectBorderRadius="0.313rem"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
      <div className='fs-10 mb-3'>
        <PieChart/>
        Efisiensi
      </div>
      </div>
      <div>
      <ProgressBar
        width="11.25rem"
        height="0.563rem"
        rect
        fontColor="gray"
        percentage="85"
        rectPadding="1px"
        rectBorderRadius="0.313rem"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
      <div className='fs-10 mb-3'>
        <CodeSquare/>
        Kinerja
      </div>
      </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <MDBContainer fluid className="text-center">
        <MDBRow>
        <figure className='text-center mb-0'>
      <MDBTypography blockquote>
        <p className="text-decoration-underline">LAYANAN</p>
      </MDBTypography>
      <figcaption className='blockquote-footer mb-0'>
      Pelayanan terbaik merupakan kebanggan kami.
      </figcaption>
    </figure>
        </MDBRow>
      </MDBContainer>

      <br></br>
      <br></br>

      <div className='container'>
        <div>
          <center>
          <img src={Person} className='person'/>
      <p className="text-monospace">Mengutamakan Pelanggan</p>
      <br></br>
      <p >Melayani sepenuh hati kepuasan anda prioritas utama kami </p>
      </center>
        </div>
        <div>
          <center>
          <img src={Call} className='person'/>
          <p className="text-monospace">Pengaduan  Pelanggan</p>
          <br></br>
      <p>Melayani pelanggan dengan seputar kendala pengaduan pdam</p>
      </center>   
        </div>
        <div>
          <center>
          <img src={Question} className='person'/>
          <p className="text-monospace">Analisa Masalah </p>
          <br></br>
          <p>Kerja sama dalam tim membantu mempercepat memecahkan masalah yang terjadi</p>
          </center>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>

      
    </MDBFooter>






    )
}
export default Footer;
