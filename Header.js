import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from "react-router-dom";
import Logo from './images/logo1.png';
// import Logo_2 from './images/log_2.png';
// import Logo_1 from './images/log_1.png';
// import Login from "../login";

// import Log from './images/user_1.png';
// import User_Logo from './images/user_1.png';
// import Bundles from './null.js';
// import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, Navigate } from "react-router-dom";
function Header(){
    
    return(
        <div className="h" > 
            <div className="row"style={{background:"#ad1457",top:0}}>
                <div className="col-md-6"><img src={Logo} style={{width:"130px",paddingTop:"15px",paddingLeft:"10px",marginLeft:30}}/>
                {/* <span><img src={Logo_1} style={{width:"60px",paddingTop:"15px",paddingLeft:"10px"}}/></span>
                <span><img src={Logo_2} style={{width:"90px",paddingTop:"37px",paddingLeft:"1px"}}/></span></div> */}
                </div>
                <div className="col-md-6" >
                    {/* <ul style={{listStyleType:"none",float:"right",marginRight:"40px"}}>
                <li ><img src={User_Logo} style={{width:"40px",paddingTop:"30px"}}/></li>
                    <li >User</li></ul> */}
                    <p style={{float:"right",margin:"20px",padding:10}}><button ><a href="<Logout/>" style={{textDecorationLine:"none",color:"black"}}>Logout</a></button></p>
                    </div>
                    
            </div>
            
        </div>
    )
}   
export default Header;
