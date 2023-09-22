import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/Slice'; 

const ProductInput = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
    
   const dispatch = useDispatch();
   let currentID = 4;

   const getNextSequentialID = () => {
   const nextID = currentID;
    currentID += 1; 
    return nextID;
  };

  const handleAddProduct = () => {
    if (productName.trim() === '' || price.trim() === '') {
      setErrorMessage('Please fill in all fields.'); // You can use a better UI for this, like showing an error message.
      return;
    }
    const newID = getNextSequentialID();
   
    const newProduct = {
      id: newID,
      name: productName,
      price: parseFloat(price),
      totalPrice:parseFloat(price)
  
    };
console.log(newProduct);
    // Dispatch the addProduct action
    dispatch(addProduct(newProduct));

   
    setProductName('');
    setPrice('');
    setShowAddtable(false);
  };
  const [showAddtable, setShowAddtable] = useState(false);
  // const {register,handleSubmit,errors}=useForm()
 
    return (
    <>
  
    <button type="button" class="btn inputbtn addbtn "onClick={() => setShowAddtable(true)}>Add+</button>
    {showAddtable && (
      <div className="row">
        <div className=" col-md-8">
        
      
         
          <div className=" inputcard card">
            <div className="card-body">
              <h2 className="card-title">Add Product</h2>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  // ref={register({required:"product name is required"})}
                    />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
              // ref={register({required:"price  not valid"}) }     
                />
              </div>
              
              <button className="btn btn inputbtn" onClick={handleAddProduct}>
                Add Item
              </button>
            </div>
          </div>
        
        </div>
        </div>
        
        
    )}
        </>
    )
}
    
export default ProductInput;