import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Checkout {
    visible: boolean
}

const initialState: Checkout = {
    visible: false
};

export const checkoutSlice = createSlice({
    name: 'checkoutPopup',
    initialState,
    reducers: {
        toogleCheckout: (state) => {
            state.visible = !state.visible
        },
    },
});

export const { toogleCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
