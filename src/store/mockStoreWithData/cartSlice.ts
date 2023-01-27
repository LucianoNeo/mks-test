import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    brand: string;
    id: number;
    name: string;
    quantity: number;
    price: number;
    photo: string;
    description: string;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [
        {
            id: 1,
            name: 'item1',
            price: 0,
            quantity: 1,
            description: 'product',
            photo: './placeholder.png',
            brand: 'Apple'
        },
    ],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartItem>) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity++;

                return
            }
            state.items.push(action.payload);
        },
        addQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity++;

            }
        },
        removeQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex((i) => i.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        checkout: (state) => {
            state.items = [];
        },
    },
});

export const { addProduct, addQuantity, removeQuantity, removeProduct, checkout } = cartSlice.actions;
export default cartSlice.reducer;
