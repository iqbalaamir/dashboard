import React from 'react'
import Sidebar from './Sidebar'
import Home from './HomeComponent'
function Main() {
  return (
    // <div>
    //     <Sidebar/>
    // </div>

    <div className="container-fluid">
      <div className="row">
     <div className="col-4 col-md-2">
     <Sidebar/>
        </div>
   
        <div className="col" style={{ padding: 0 }}>
          <Home/>
        </div>
      </div>
    </div>
   
  )
}

export default Main