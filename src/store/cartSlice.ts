import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: string;
    title: string;
    quantity: number;
    price: number;
    imageUrl: string;
    description: string;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
        addQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        removeQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            const index = state.items.findIndex((i) => i.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
    },
});

export const { addProduct, addQuantity, removeQuantity, removeProduct } = cartSlice.actions;
export const cartStateData = (state: CartState) => state.items;
export default cartSlice.reducer;
