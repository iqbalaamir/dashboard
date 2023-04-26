import Table from 'react-bootstrap/Table';

function TableComponent() {
  return (
    <Table striped bordered hover className='table caption-top bg-white rounded mt-2'>
      <caption className='fs-4 text-white'>Recent Orders</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>nona</td>
          <td>marie</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;