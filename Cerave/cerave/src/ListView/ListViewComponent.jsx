// src/ListView/ListViewComponent.js
import React from 'react';
import './ListView.css'; // Assuming you have some CSS for styling

const ListViewComponent = ({ productViewList }) => {
  return (
    <ul className="list-view">
      {productViewList.map((product, index) => (
        <li key={index} className="list-item">
          <h3>{product.productName}</h3>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListViewComponent;
