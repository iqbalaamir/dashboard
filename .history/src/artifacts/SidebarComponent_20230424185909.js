import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SidebarComponent() {
  return (
    <div className='bg-white sidebar'>
        <div className='m-2'>
            <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
            <span className='brand-name fs-4'>Neelakshi</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
                <i className='bi bi-speedometer2 fs-5 me-2'></i>
                <span className='fs-5'>Dashboard</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-house fs-5 me-2'></i>
                <span className='fs-5'>Home</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-table fs-5 me-2'></i>
                <span className='fs-5'>Products</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-clipboard-data fs-5 me-2'></i>
                <span className='fs-5'>Report</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-people fs-5 me-2'></i>
                <span className='fs-5'>Customers</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-power fs-5 me-2'></i>
                <span className='fs-5'>logout</span>
            </a>
           

        </div>
    </div>
  )
}

export default SidebarComponent