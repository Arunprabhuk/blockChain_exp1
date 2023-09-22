import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/Slice';

const ProductInput = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAddtable, setShowAddtable] = useState(false); // Initially, set to false

  const dispatch = useDispatch();
  let currentID = 4;

  const getNextSequentialID = () => {
    const nextID = currentID;
    currentID += 1;
    return nextID;
  };

  const handleAddProduct = () => {
    if (productName.trim() === '' || price.trim() === '') {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const newID = getNextSequentialID();

    const newProduct = {
      id: newID,
      name: productName,
      price: parseFloat(price),
      totalPrice: parseFloat(price),
    };

    // Dispatch the addProduct action
    dispatch(addProduct(newProduct));

    setProductName('');
    setPrice('');

    // Close the dialogue box after adding the product
    setShowAddtable(false);
  };

  return (
    <>
      {showAddtable ? (
        <div className="row">
          <div className="col-md-8">
            <div className="inputcard card">
              <div className="card-body">
                <h2 className="inputheader card-title">Add Product</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <button className="inputbtn btn btn-primary" onClick={handleAddProduct}>
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button type="button" className="btn inputbtn" onClick={() => setShowAddtable(true)}>
          Add+
        </button>
      )}
    </>
  );
};

export default ProductInput;
