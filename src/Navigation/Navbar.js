import React from "react";
import Logo from '../Assets/Logo.png';
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '././Navbar.css';
import { Search } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">
        <img src={Logo} className="logo"/>
  </Link>
  <Link to='/'>
    <button className="font-size">Home</button></Link>
  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Profil
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to='visi-misi'><Dropdown.Item href="#/action-1">Visi-Misi</Dropdown.Item></Link>
        <Link to='sejarah'><Dropdown.Item href="#/action-2">Sejarah</Dropdown.Item></Link>
        </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Layanan Pelanggan
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to='cek-tagihan'><Dropdown.Item href="#/action-1">Cek tagihan</Dropdown.Item></Link>
        <Link to='survey'><Dropdown.Item href="#/action-2">Survey Pelanggan</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
    <Search className="search"/>
  </nav>


    )
}

export default Navbar