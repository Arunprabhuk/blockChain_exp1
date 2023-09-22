// components/Main.js
import React from 'react';
import ProductInput from './ProductInput';
import ProductList from './List';
import { useState } from 'react'
import MultipleItems from './slider'

import { useDispatch, useSelector } from 'react-redux';
import Receipt from './Receipt';
import { onClear } from '../redux/Slice';
import CustomizedTables from '../Table';
const Main = () => {
  const {selectedProduct} = useSelector((state) => state.products); 
  const dispatch = useDispatch();
  const [showTable, setShowTable] = useState(false); 
  const toggleTableVisibility = () => {
    setShowTable(!showTable);
  };

  
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className='title'><h2 className='title'>Product List</h2></div>
        <div className="col-md-3">
          
          <ProductInput />
        </div>
        <div className="col-md-6">
       
          <ProductList />
        </div>
        <div className="col-md-3">
        {selectedProduct && (
        <Receipt
          product={selectedProduct}
          thankYouMessage="Thank you for your purchase!"
          onClose={()=>{
            dispatch(onClear())
          }}
          toggleTable={toggleTableVisibility} />
      )}
        </div>
        <div className="col-md-12">
            {showTable && <CustomizedTables />}
          </div>
      </div>

    </div></>
  );
};

export default Main;
