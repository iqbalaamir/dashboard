import React from "react";
import NavbarComponent from "./NavbarComponent";
import SidebarComponent from "./SidebarComponent";
function Item2() {
  return (
    <div className="container-fluid">
    <div className="row">
      <SidebarComponent />
      <div className="col" style={{ backgroundColor: "#f8f9fc", padding: 0 }}>
        <NavbarComponent />
        <div>
          <div>Item2</div>
          <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Item2;
