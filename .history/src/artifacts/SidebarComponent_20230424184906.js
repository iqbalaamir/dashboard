import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SidebarComponent() {
  return (
    <div className='bg-white'>
        <div>
            <i className='bi bi-bootstrap-fill my-2'></i>
            <span className='brand-name fs-4'>Neelakshi</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <a className='list-group-item list-group-item-action my-2'>
                <i className='bi bi-speedometer-2'></i>
                <span>Dashboard</span>
            </a>
            <a className='list-group-item list-group-item-action my-2'>
                <i className='bi bi-house'></i>
                <span>House</span>
            </a>
        </div>
    </div>
  )
}

export default SidebarComponent