import React from "react";
import Nav from "./Nav";
import TableComponent from "./TableComponent";

function Home() {
  return (
    <div className="">
      <Nav />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="bi bi-cart-plus p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230</h3>
                <p className="fs-5">Delivery</p>
              </div>
              <i className="bi bi-truck p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2300</h3>
                <p className="fs-5">Sales</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">20%</h3>
                <p className="fs-5">Increase</p>
              </div>
              <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-2">
      <TableComponent/>
      </div>
    </div>
  );
}

export default Home;
