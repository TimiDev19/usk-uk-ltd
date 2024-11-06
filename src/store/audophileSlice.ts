import { AudiofileState, CartItem } from "@/interface/Interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

const initialState: AudiofileState = {
  customerName: "",
  mobileMenu: false,
  cartIsVisible: false,
  cart: [] as CartItem[],
  totalQuantity: 0,
  checkoutCompleteIsVisible: false,
  authModalIsVsible: false,
};

const audiofileSlice = createSlice({
  name: "audiophile",
  initialState,
  reducers: {
    toggleMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.mobileMenu = action.payload;
    },
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.cartIsVisible = action.payload;
    },
    toggleCheckout: (state, action: PayloadAction<boolean>) => {
      state.checkoutCompleteIsVisible = action.payload;
    },
    toggleAuthModal: (state, action: PayloadAction<boolean>) => {
      state.authModalIsVsible = action.payload;
    },
    setCustomerName: (state, action: PayloadAction<string>) => {
      state.customerName = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          img: newItem.img,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
        toast('Item added to cart successfully !', {
          duration: 4000, // Duration in milliseconds
          position: 'top-center', // Position of the toast
          style: {
            background: '#4CAF50', // Green background
            color: '#fff', // White text
            padding: '16px', // Padding
            borderRadius: '8px', // Rounded corners
            fontSize: '16px', // Font size
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
          },
        });
      } else {
        toast('The item is already in the cart.', {
          duration: 4000, // Duration in milliseconds
          position: 'top-center', // Position of the toast
          style: {
            background: 'red', // Green background
            color: '#fff', // White text
            padding: '16px', // Padding
            borderRadius: '8px', // Rounded corners
            fontSize: '16px', // Font size
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
          },
        });
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ id: string | number; updatedQuantity: number }>
    ) => {
      const { id, updatedQuantity } = action.payload;
      const updatedItem = state.cart.find((item) => item.id === id);
      if (updatedItem) {
        updatedItem.quantity = updatedQuantity;
      }
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action: PayloadAction<{ id: string | number }>) => {
      const { id } = action.payload;
      const newCart = state.cart.filter((item) => item.id !== id);
      state.cart = newCart;
    },
  },
});

export const {
  toggleMobileMenu,
  toggleCart,
  toggleCheckout,
  toggleAuthModal,
  setCustomerName,
  addToCart,
  updateCart,
  emptyCart,
  removeItem,
} = audiofileSlice.actions;

export default audiofileSlice.reducer;
