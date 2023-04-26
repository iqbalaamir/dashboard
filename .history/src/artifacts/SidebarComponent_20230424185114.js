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
                <span>House</span>
            </a>
        </div>
    </div>
  )
}

export default SidebarComponent