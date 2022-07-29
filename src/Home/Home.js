import React from "react";
import Navbar from "../Navigation/Navbar.js";
import Body from "../Body/Body.js";
import Footer from "../Footer/Footer.js";
import VisiMisi from "../Visi-Misi/Visi-Misi.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Sejarah from "../Sejarah/Sejarah.js";
import CekTagihan from "../Cek Tagihan/CekTagihan.js";
import Survey from "../Survey/Survey.js";
import Emoji from "../Emoji/Emoji.js";
import Login from "../Login/Login.js";
import HomeAdmin from "../Admin/HomeAdmin.js";


function Home() {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/visi-misi" element={<VisiMisi/>}></Route>
                <Route path="/sejarah" element={<Sejarah/>}></Route>
                <Route path="/cek-tagihan" element={<CekTagihan/>}></Route>
                <Route path="/survey" element={<Survey/>}></Route>
                <Route path="/feedback" element={<Emoji/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/admin" element={<HomeAdmin/>}></Route>
            </Routes>
            <Footer/>

        </Router>


    )
}

export default Home;