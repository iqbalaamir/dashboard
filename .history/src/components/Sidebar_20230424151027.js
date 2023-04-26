import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sidebar() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh100'>
                <div>
                    <a className='text-decoration-non d-flex align-items-center text-white d-none d-sm-inline'>
                        <span  className='fs-4'>Side menu</span>
                    </a>
                </div>
              <div class="dropdown open">
                <a class="btn btn-secondary dropdown-toggle text-white" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                         <span>Yourself</span>
                        </a>
                <div class="dropdown-menu" aria-labelledby="triggerId">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item disabled" href="#">Disabled action</a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
