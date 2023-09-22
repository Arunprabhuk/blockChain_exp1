import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, updateProductQuantity,purchaseProduct, buyProducts, selectedProducts, onClear } from '../redux/Slice';
import Receipt from './Receipt';
import Slider from "react-slick";

const ProductList = () => {
  const {products,selectedProduct} = useSelector((state) => state.products); 
  const [purchasedProducts, setPurchasedProducts] = useState([]); 
  const dispatch = useDispatch();
  // const [selectedProduct, setSelectedProduct] = useState(null);

  

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateProductQuantity({ productId, quantity: newQuantity }));
  };

  
  const handleBuyProduct = (productId) => {
    console.log(productId)
    // Find the product that was bought
    const product = products.find((p) => p.id === productId);
   
  
    
    setPurchasedProducts([...purchasedProducts, product]);
    dispatch(buyProducts(product))
    console.log('qwerty',product);
  dispatch(selectedProducts(product))
    // setSelectedProduct(product); 
  };

  // const handleCloseReceipt = () => {
  //   setSelectedProduct(null);
  // };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const activeProducts = products.filter((product) => !product.removed).reverse();

  return (
    <>
      <div>
        <Slider {...settings}>
          {activeProducts.map((product, index) => (
            <div key={index}>
              <div className="col-md-8 mb-3">
                <div className="listcard card my-custom-card">
                  <div className="card-body">
                    <h5 className="card-title  mb-1">{product.name}</h5>
                    <p className="card-text  mb-1">Price: &#8377;{product.price}</p>
                    <p className="card-text  mb-1">Total Price: &#8377;{product.totalPrice}</p>
                    <div className="input-group mb-3">
                      <span className="input-group-text qtytext">Qty:</span>
                      <input
                        type="number"
                        className="form-control form-control-sm qty"
                        value={product.quantity || 1}
                        onChange={(e) =>
                          handleQuantityChange(product.id, parseInt(e.target.value, 10))
                        }
                      />
                    </div>
                    <button
                      className="inputbtn btn  btn-sm"
                      onClick={() => handleBuyProduct(product.id)}
                    >
                      Buy
                    </button>
                    {/* <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remove
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      
    </>
  );
};

export default ProductList;
