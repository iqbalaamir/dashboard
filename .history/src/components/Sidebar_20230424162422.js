import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
export default function Sidebar() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100'>
                <div>
                    <a className='text-decoration-none d-flex align-items-center text-white d-none d-sm-inline'>
                        <span  className='fs-4'>Side menu</span>
                    </a>
                    <hr className='text-white d-none d-sm-block'>
                    </hr>
                    <ul class="nav nav-pills flex-column ">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" aria-current="page">Active link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled link</a>
                        </li>
                    </ul>
                </div>
              <div class="dropdown open">
                <a class="btn border-none dropdown-toggle text-white" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                         <i className='bi bi-person fs-4'></i><span className='fs-4 ms-3'>Yourself</span>
                        </a>
                <div class="dropdown-menu" aria-labelledby="triggerId">
                    <a class="dropdown-item" href="#">Profile</a>
                    <a class="dropdown-item disabled" href="#">Setting</a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
