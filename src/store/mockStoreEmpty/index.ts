import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice';

const mockStoreEmpty = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer
  },
});


export type RootState = ReturnType<typeof mockStoreEmpty.getState>
export type AppDispatch = typeof mockStoreEmpty.dispatch
export default mockStoreEmpty;
