import React from 'react';

const Receipt = ({ product, thankYouMessage, onClose,toggleTable }) => {
  
  return (
    <div className="receipt">
      <div className="card">
      <div className="card-header">
          <div className="header-content">
            <h2>Receipt</h2>
            <a className="transaction-history-link" onClick={toggleTable}>Transaction History</a>

          </div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>${product.totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <p className="thank-you">{thankYouMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;

