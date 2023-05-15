import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

import axios from "axios";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useRef } from "react";
import JsPDF from "jspdf";
function Record(){
    const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Bundles info",
    sheet: "Bundles info",
  });

  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };
  const [send, setSend] = useState({
    frm:"",
        id1:"",
        clg:"",
        dro:"",
        cop:"",
        rem:"",
        sub:""
  });
  const handleChange = (e) => {
    setSend((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
    console.log(send);
  };
  const postSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/postdata", { send }).then((res) => {
      // setSend(res.data)
      console.log(res.data);
      alert("success");
    });
    // alert('success')
  };
  const [houses, sethouses] = useState([]);
  var inc = 0;
  useEffect(() => {
    axios
      .get("http://localhost:5000/getData")
      .then((res) => sethouses(res.data));
  });
    return(
<div className="row">
        <div className="container">
          <div className="row" style={{marginTop:70}}>
            <div className="col-md-2"></div>
            <div
              className="col-md-8"
              style={{
                border: "solid #880e4f 2px",
                padding: "20px",
                borderRadius: "10px",
                background: "#ede7f6",
                boxShadow: "2px 2px 2px 2px",
              }}
            >
              <div>
                <center>
                  <h2>Repair & Maintenance</h2>
                </center>
              </div>
              <div
                style={{ backgroundColor: "#880e4f", width: "100%", height: 3 }}
              ></div>
              <br></br>
              <center>
                <span>
                  <button onClick={onDownload}>Excel</button>
                </span>
                <span style={{ marginLeft: 8 }}>
                  <button onClick={generatePDF} type="button">
                    PDF
                  </button>
                </span>
              </center>
              <br></br>
              <div>
                <Table
                  responsive
                  striped
                  bordered
                  hover
                  style={{
                    marginTop: "30px",
                    background: "white",
                    borderRadius: "10px",
                  }}
                  ref={tableRef}
                  id="report"
                >
                  <thead>
                    <tr>
                      <th>SNo</th>
                      <th>Date of Booking</th>
                      <th>Car Model</th>
                      <th>Car ID</th>
                      <th>Hours of booking</th>
                      <th>Booking status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {houses.map((val, key) => {
                      inc++;
                      // bun+=val.num1;
                      return (
                        <tr key={key}>
                          <td>{inc}</td>
                          <td>{val.frm}</td>
                          <td>{val.clg}</td>
                          <td>{val.dro}</td>
                          <td>{val.cop}</td>
                          <td>Booked</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
}
export default Record;