import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://wallpapercave.com/wp/wp6871230.jpg)",
          backgroundRepeat:
          "no-repeat",
         backgroundSize:
          "cover",
      }}
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Payment</h3>
              </div>
              <p className="fw-bold mb-4 pb-2">Choose Payment Method:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
               
                <div className="flex-fill mx-3">
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-4">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked/>
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0" >
                      Debit Card
                    </p>
                    <div className="ms-auto">************3456</div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-4">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1"/>
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                 
                    <p className="mb-0" >
                      Credit Card
                    </p>
                    <div className="ms-auto">************3456</div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-4">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0" >
                      Paytm
                    </p>
                    <div className="ms-auto">@ybl</div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-4">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1"  />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0" >
                      GooglePay
                    </p>
                    <div className="ms-auto">@ybl</div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-4">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                     
                      Phonepay
                    </p>
                    <div className="ms-auto">@ybl</div>
                  </div>
                  
                </div>
                <p className="fw-bold mb-4 pb-2">Payment Details:</p>
                <MDBRow className="my-4">
                <MDBCol size="5">
                  <MDBInput
                    label="Card Number"
                    id="form"
                    type="text"
                    size="lg"
                    placeholder="---- ---- ---- ----"
                  />
                </MDBCol>
                <MDBCol size="4">
                  <MDBInput
                    label="Expire"
                    id="form"
                    type="text"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="text"
                    size="lg"
                    placeholder="CVV"
                  />
                  
                </MDBCol>
              </MDBRow>
              
              <MDBInput
                label="UPI Id"
                id="form3"
                type="text"
                size="lg"
                placeholder="@ybl"
                
              />
                <center><MDBBtn block size="md" >
                  Proceed to payment
                </MDBBtn>
                </center>
              </div>
                  
                </div>
                
             
              {/* <a href="#!">Submit card</a> */}
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}