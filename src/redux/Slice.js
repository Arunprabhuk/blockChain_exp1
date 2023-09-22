import { createSlice } from '@reduxjs/toolkit';

   
   const initialState = {
    products:[{id: 1, name: 'shirt', price: 1000,totalPrice:1000},{id: 2, name: 'watch', price: 2000,totalPrice:2000},{id: 3, name: 'bag', price: 3000,totalPrice:3000}
    ],
    buyed_products:[],
    selectedProduct:null,
    
   }

  
  const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addProduct: (state, action) => {
       
        state.products = [...state.products,action.payload]
       
      },
      buyProducts:(state,action)=>{
        
        state.buyed_products=[...state.buyed_products,action.payload]
      },
      selectedProducts:(state,action)=>{
        
        state.selectedProduct=action.payload
      },
      onClear:(state,action)=>{
        
        state.selectedProduct=null
      },
      
      // removeProduct: (state, action) => {
      //   const productIdToRemove = action.payload;
      //   // Find the product to remove
      //   const productToRemove = state.find(product => product.id === productIdToRemove);
      //   if (productToRemove) {
      //     // Mark the product as "removed" instead of filtering it out
      //     productToRemove.removed = true;
      //   }
      //   // Save the updated state to local storage
      //   localStorage.setItem('productState', JSON.stringify(state));
      // },
      
      updateProductQuantity: (state, action) => {
        // Update the quantity of a product in the state
        const { productId, quantity } = action.payload;
        const productToUpdate = state.products.find(product => product.id === productId);
        if (productToUpdate) {
          productToUpdate.quantity = quantity;
          productToUpdate.totalPrice = productToUpdate.price * quantity; // Update the total price
        }},
        // purchaseProduct: (state, action) => {
        //   const productIdToPurchase = action.payload;
        //   const productToPurchase = state.products.find(product => product.id === productIdToPurchase);
        //   if (productToPurchase) {
        //     console.log(productToPurchase);
        //     // Mark the product as purchased 
        //     productToPurchase.purchased = true;
        //     // Add it to the purchasedProducts array
        //     state.purchasedProducts.push(productToPurchase);
        //   }
        //   // Save the updated state to local storage
        //   localStorage.setItem('productState', JSON.stringify(state));
        // },
      
    },
  });
  
  export const { addProduct,removeProduct,updateProductQuantity,purchaseProduct,  buyProducts,selectedProducts,onClear } = productSlice.actions;
  
  export default productSlice.reducer;