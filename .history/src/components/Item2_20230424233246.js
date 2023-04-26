import React from "react";

function Item2() {
  return (
    <div className="container-fluid">
    <div className="row">
      <SidebarComponent />
      <div className="col" style={{ backgroundColor: "#f8f9fc", padding: 0 }}>
        <NavbarComponent />
        <div>
          <div>Item2</div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Item2;
