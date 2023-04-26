import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-sm-2 sideNav d-flex flex-column justify-content-between min-vh-100">
          <div className="mt-3">
            <a
              className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline"
              role="button"
            >
                 <i className="bi bi-emoji-smile-fill"></i>
              <span className="ms-2 d-none d-sm-inline f5-4">SB ADMIN</span>
            </a>
            <hr className="text-white d-none d-sm-block"></hr>
            <ul class="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
              <li class="nav-item  my-1 py-2 py-sm-0">
                <a
                  class="nav-link text-white text-center text-sm-start"
                  href="#"
                  aria-current="page"
                >
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li class="nav-item  my-1 py-2 py-sm-0">
                <a
                  class="nav-link text-white text-center text-sm-start"
                  href="#submenu"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-2 d-none d-sm-inline">Products</span>
                  <i className="bi bi-arrow-down-short ms-0 ms-sm-3"></i>
                </a>
                <ul
                  class="nav collapse ms-2 flex-column"
                  id="submenu"
                  data-bs-parent="#parentM"
                >
                  <li class="nav-item ">
                    <a class="nav-link text-white" href="#" aria-current="page">
                      <span className="d-none d-sm-inline"> Item</span>1
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link text-white" href="#">
                      <span className="d-none d-sm-inline"> Item</span>2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item  my-1">
                <a
                  class="nav-link text-white text-center text-sm-start"
                  href="#"
                  aria-current="page"
                >
                  <i className="bi bi-house"></i>
                  <span className="ms-2 d-none d-sm-inline">House</span>
                </a>
              </li>
              <li class="nav-item text-white my-1">
                <a
                  class="nav-link text-white text-center text-sm-start"
                  href="#"
                  aria-current="page"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Customers</span>
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
              <span className="f5-5 ms-3 d-none d-sm-inline">Yourself</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">
                Profile
              </a>
              <a class="dropdown-item" href="#">
                Setting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
