import { createSlice } from '@reduxjs/toolkit';

   
   const initialState = {
    products:[{id: 1, name: 'shirt', price: 1000,totalPrice:1000},{id: 2, name: 'watch', price: 2000,totalPrice:2000},{id: 1, name: 'bag', price: 3000,totalPrice:3000}
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
      
      
      updateProductQuantity: (state, action) => {
        
        // Update the quantity of a product in the state
        const { productId, quantity } = action.payload;
        const productToUpdate = state.products.find(product => product.id === productId);
        if (productToUpdate) {
          productToUpdate.quantity = quantity;
          productToUpdate.totalPrice = productToUpdate.price * quantity; // Update the total price
        }},
       
      
    },
  });
  
  export const { addProduct,removeProduct,updateProductQuantity,purchaseProduct,  buyProducts,selectedProducts,onClear } = productSlice.actions;
  
  export default productSlice.reducer;