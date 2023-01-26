import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice';

const mockStore = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer
  },
});


export type RootState = ReturnType<typeof mockStore.getState>
export type AppDispatch = typeof mockStore.dispatch
export default mockStore;
