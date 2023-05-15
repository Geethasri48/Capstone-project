import React from 'react'
// import   './book.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useState,useEffect } from 'react';
// import phone from './phone.jpg'
function Booking() {
    const [send,setSend] = useState({
        frm:"",
        id1:"",
        clg:"",
        dro:"",
        cop:"",
        rem:"",
        sub:""
    })  
    const handleChange = (e) => {
        setSend((prevState)=>({
            ...prevState,

            [e.target.name]:e.target.value
            
        }))
        console.log(send)
    }
    const postSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/postdata',{send})
        .then((res)=>{
            // setSend(res.data)
            console.log(res.data)
            alert('success')
        })
        // alert('success')
    }
  return (
    <div className='text'>
      
         <div className='container' style={{marginTop:20}}>
        
            <div className='row' style={{ }} >
                
                <div>
            <div className="row" style={{marginTop:30}}>
                <div  className="container">
                <div className="row">
                        <div className="col-md-12" style={{textAlign:"center",color:"#004d40"}}><h2>Booking</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{border:"solid #880e4f 2px",boxShadow:"2px 2px 2px 2px",borderRadius:"10px",borderRadius:"10px",padding:"20px",backgroundColor:"#ede7f6"}}>
                            <div><center><h2>Bookings log</h2></center></div>
                            <div style={{backgroundColor:"#880e4f",width:"100%",height:3}}><hr></hr></div>
                            <div>
                            <form style={{width:"70%",marginLeft:"18%"}} onSubmit={postSubmit}>
                        <div className="input-container">
                        <label for="id1">Date of booking</label>
                        <input type="date" name="frm" id="id4" onChange={handleChange} required/>
                        </div>
                        <div className="input-container">
                        <label for="id2">Booking purpose</label>
                        {/* <input type="" name="to" id="id5"required /> */}
                        <select onChange={handleChange} name="id1">
                            <option></option>
                            <option>Vacation</option>
                            <option>Personal Use</option>
                        </select>
                        </div>
                        <div className="input-container">
                        <label for="id3">Car Model</label>
                        <input type="textarea" name="clg" id="id6" onChange={handleChange} required />
                        </div>
                        
                        <div className="input-container">
                        <label for="id3">Car Id</label>
                        <input type="textarea" name="dro" id="id6"  onChange={handleChange} required/>
                        </div>
                        <div className="input-container">
                        <label for="id3">No.of Hours of booking</label>
                        <input type="number" name="cop" id="id6"  onChange={handleChange} required/>
                        </div>
                        {/* <div className="input-container">
                        <label for="id3">Approved Authority</label>
                        <input type="textarea" name="app" id="id6" onChange={handleChange} required />
                        </div> */}
                        <div className="input-container">
                        <label for="id3">Remarks</label>
                        <input type="textarea" name="rem" id="id6" onChange={handleChange} required />
                        </div>
                        <div className="button-container">
                        <input type="submit" value={"Book ur Car"}  />
                        </div>
                        <div>Proceed for payment for successful booking</div>
                    </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    
                </div>
            </div>   
        </div>

    </div>
    </div>
      
    </div>
  );
}

export default Booking;
