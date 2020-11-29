import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import {Navbar} from "react-bootstrap"
import Mainbody from "./Mainbody"
import { useEffect, useState } from 'react';

function App() {



  return (
    <div className="App">
    
         <Header/>
         <Mainbody />
   
    </div>
  );
}

export default App;
