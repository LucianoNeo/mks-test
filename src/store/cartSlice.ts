import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
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
    items: [{ id: 1, title: 'item1', price: 0, quantity: 2, description: 'product', imageUrl: './placeholder.png' }],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartItem>) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity++;
                console.log(item)
                return
            }
            state.items.push(action.payload);
        },
        addQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity++;
                console.log(item)
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
    },
});

export const { addProduct, addQuantity, removeQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
