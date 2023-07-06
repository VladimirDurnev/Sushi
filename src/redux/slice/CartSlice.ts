import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { AppItem } from '../../Type';

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
            const index = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            const item = state.cart[index];
            if (index !== -1) {
                item.count += 1;
            } else {
                state.cart.push(action.payload);
                if (item && item.count !== undefined) {
                    item.count += 1;
                }
            }
        },
        deleteItemFromCart: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1) {
                const item = state.cart[index];
                if (item && item.count !== undefined && item.count > 1) {
                    item.count -= 1;
                }
            } else {
                state.cart.splice(index, 1);
            }
        },
    },
});

export const { addItemToCart, deleteItemFromCart } =
    cartSlice.actions;

export const selectCart = (state: RootState) => state.CartSlice;

export default cartSlice.reducer;
