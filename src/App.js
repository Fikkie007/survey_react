import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Navigation/Navbar';
import Body from './Body/Body';
import Footer from './Footer/Footer';


function App() {
  return(
    <div>
    <Home/>
    </div>
  )
}

export default App;
