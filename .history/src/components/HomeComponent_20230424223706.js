import React from "react";
import TableComponent from "./TableComponent";

function Home() {
  return (
    <div className="">
     
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1" style={{borderBottomWidth:1,borderBottomColor:"red"}}>
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
             
                <p className="fs-12" style={{color:"#4e73df"}}>EARNINGS (Monthly)</p>
                <h5 className="fs-2" style={{color:"#5a5c69"}}>$ 40000</h5>
              </div>
              <i className="bi bi-cart-plus p-3 fs-1" style={{color:"#dddfeb"}}></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
              <p className="fs-12" style={{color:"#1cc88a"}}>EARNINGS (Annual)</p>
                <h5 className="fs-2" style={{color:"#5a5c69"}}>$ 40000</h5>
              </div>
              <i className="bi bi-truck p-3 fs-1" style={{color:"#dddfeb"}}></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
              <p className="fs-12" style={{color:"#36b9cc"}}>TASKS</p>
                <h5 className="fs-2" style={{color:"#5a5c69"}}>$ 40000</h5>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1" style={{color:"#dddfeb"}}></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
              <p className="fs-12" style={{color:"#f6c23e"}}>PENDING REQUESTS</p>
                <h5 className="fs-2" style={{color:"#5a5c69"}}>$ 40000</h5>
              </div>
              <i className="bi bi-graph-up-arrow p-3 fs-1" style={{color:"#dddfeb"}}></i>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
      <TableComponent/>
      </div>
    </div>
  );
}

export default Home;
