import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { AppItem } from './HomeSlice';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CartState {
    cart: AppItem[];
}

const initialState: CartState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<AppItem>) => {
            state.cart.push(action.payload);
        },
        deleteItemToCart: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1) {
                state.cart.splice(index, 1);    
            }
        },
    },
});

export const { addItemToCart, deleteItemToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.CartSlice;

export default cartSlice.reducer;
