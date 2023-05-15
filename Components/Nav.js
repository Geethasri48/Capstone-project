import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Log from './images/user_1.png'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaTh} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import {FaRegChartBar} from "react-icons/fa";
import {FaCommentAlt} from "react-icons/fa";
import {FaShoppingBag} from "react-icons/fa";
import {FaThList} from "react-icons/fa";


function Nav(){
    
    return(
        <div className="Nav">
                <div className="row" style={{height:"82.4vh"}}>
                <div className="col-md-12" style={{background:"#ad1457",borderRadius:"10px"}}>
                    
                    <p><img src={Log} style={{width:"100px",marginLeft:"40px",marginTop:"10px"}} /></p>
                    <ul style={{listStyleType:"none"}}>
                        <b>
                        {/* <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"#fce4ec"}}><FaTh/></span><span style={{marginLeft:"5px"}}><Link className="list" to="/Cars" style={{color:"#fce4ec"}}>Dashboard</Link></span></li> */}
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"#fce4ec"}}><FaCommentAlt/></span><span style={{marginLeft:"5px"}}><Link className="list" to="/"style={{color:"#fce4ec"}}>Cars Info</Link></span></li>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"#fce4ec"}}><FaRegChartBar/></span><span style={{marginLeft:"5px"}}><Link className="list" to="/Booking" style={{color:"#fce4ec"}}>Booking</Link></span></li>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"#fce4ec"}}><FaRegChartBar/></span><span style={{marginLeft:"5px"}}><Link className="list" to="/Payment" style={{color:"#fce4ec"}}>Payment</Link></span></li>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"#fce4ec"}}><FaThList/></span><span style={{marginLeft:"5px"}}><Link  className="list"to="/Record" style={{color:"#fce4ec"}}>Booking Records</Link></span></li>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"#fce4ec"}}><FaUserAlt/></span><span style={{marginLeft:"5px"}}><Link  className="list" to="/feedback" style={{color:"#fce4ec"}}>User Feedback</Link></span></li></b>
                    </ul>

                </div>
                
            </div>
            </div>
    )
}
export default Nav;
