import React from "react";
import TableComponent from "./TableComponent";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div className="px-3">
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div
              className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
              style={{
                borderLeft: "solid",
                borderLeftWidth: "4px",
                borderLeftColor: "#4e73df",
              }}
            >
              <div>
                <p className="fs-12" style={{ color: "#4e73df" }}>
                  EARNINGS(Monthly)
                </p>
                <h5 className="fs-2" style={{ color: "#5a5c69" }}>
                  $ 40000
                </h5>
              </div>
              <i
                className="bi bi-cart-plus p-3 fs-1"
                style={{ color: "#dddfeb" }}
              ></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
             style={{
              borderLeft: "solid",
              borderLeftWidth: "4px",
              borderLeftColor: "#1cc88a",
            }}>
              <div>
                <p className="fs-12" style={{ color: "#1cc88a" }}>
                  EARNINGS (Annual)
                </p>
                <h5 className="fs-2" style={{ color: "#5a5c69" }}>
                  $ 3453
                </h5>
              </div>
              <i
                className="bi bi-truck p-3 fs-1"
                style={{ color: "#dddfeb" }}
              ></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
             style={{
              borderLeft: "solid",
              borderLeftWidth: "4px",
              borderLeftColor: "#36b9cc",
            }}>
              <div>
                <p className="fs-12" style={{ color: "#36b9cc" }}>
                   TASKS
                </p>
                <h5 className="fs-2" style={{ color: "#5a5c69" }}>
                23423
                </h5>
              </div>
              <i
                className="bi bi-currency-dollar p-3 fs-1"
                style={{ color: "#dddfeb" }}
              ></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
             style={{
              borderLeft: "solid",
              borderLeftWidth: "4px",
              borderLeftColor: "#f6c23e",
            }}>
              <div>
                <p className="fs-12" style={{ color: "#f6c23e" }}>
                 REQUESTS
                </p>
                <h5 className="fs-2" style={{ color: "#5a5c69" }}>
                  34
                </h5>
              </div>
              <i
                className="bi bi-graph-up-arrow p-3 fs-1"
                style={{ color: "#dddfeb" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <TableComponent />
       
      </div>
    </div>
  );
}

export default Home;
