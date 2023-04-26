import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SidebarComponent() {
  return (
    <div className='bg-white'>
        <div className='m-2'>
            <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
            <span className='brand-name fs-4'>Neelakshi</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
                <i className='bi bi-speedometer2 fs-5 me-2'></i>
                <span>Dashboard</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-house fs-4 me-2'></i>
                <span>Home</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-table fs-4 me-2'></i>
                <span>Products</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-clipboard-data fs-4 me-2'></i>
                <span>Report</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-people fs-4 me-2'></i>
                <span>Customers</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-power fs-4 me-2'></i>
                <span>logout</span>
            </a>
           

        </div>
    </div>
  )
}

export default SidebarComponent