import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";

const List = () => {
  const data = [
    {position: "Forward", name: "Leborn", team: "Lakers"},
    {position: "Forward", name: "Leborn", team: "Lakers"},
    {position: "Forward", name: "Leborn", team: "Lakers"},
    {position: "Forward", name: "Leborn", team: "Lakers"}
  ]

  const renderData = (data, index) => {
    return(
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.position}</td>
        <td>{data.team}</td>
      </tr>
    )
  }

  return (
    <div>
      <ReactBootStrap.Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderData)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Product Name</th>
    //       <th>Product Category</th>
    //       <th>Unit Price</th>
    //       <th>Action</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((item) => (
    //       <tr key={item.id}>
    //         <td>{item.product_name}</td>
    //         <td>{item.product_category}</td>
    //         <td>{item.unit_price}</td>
    //         <td />
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}

export default List;
