import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse"
export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
          <div>
            <a className="text-decoration-none d-flex align-items-center text-white d-none d-sm-inline">
              <span className="fs-4">Side menu</span>
            </a>
            <hr className="text-white d-none d-sm-block"></hr>
            <ul class="nav nav-pills flex-column " id="parentM">
              <li class="nav-item  my-1">
                <a class="nav-link text-white" href="#" aria-current="page">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2">Dashboard</span>
                </a>
              </li>
              <li class="nav-item  my-1">
                <a class="nav-link text-white" href="#submenu" data-bs-toggle="collapse" aria-current="page">
                  <i className="bi bi-grid"></i>
                  <span className="ms-2">Products</span>
                  <i className="bi bi-arrow-down-short ms-3"></i>
                </a>
                <ul class="nav collapse ms-2 flex-column" id="submenu" data-bs-parent="#parentM">
                 <li class="nav-item text-white"> 
                     <a class="nav-link" href="#" aria-current="page">Item 1</a>
                 </li>
                 <li class="nav-item text-white">
                     <a class="nav-link" href="#">Item 2</a>
                 </li>
                 <li class="nav-item text-white">
                     <a class="nav-link" href="#">Item 3</a>
                 </li>
             </ul>
              </li>
              <li class="nav-item  my-1">
                <a class="nav-link text-white" href="#" aria-current="page">
                  <i className="bi bi-house"></i>
                  <span className="ms-2">House</span>
                </a>
              </li>
              <li class="nav-item text-white my-1">
                <a class="nav-link text-white" href="#" aria-current="page">
                  <i className="bi bi-people"></i>
                  <span className="ms-2">Customers</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown open">
            <a
              class="btn border-none dropdown-toggle text-white"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person fs-4"></i>
              <span className="fs-5 ms-3">Yourself</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">
                Profile
              </a>
              <a class="dropdown-item disabled" href="#">
                Setting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
