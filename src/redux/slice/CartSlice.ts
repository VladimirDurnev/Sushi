import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { AppItem } from '../../Type';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CartState {
    cart: AppItem[];
    allPrice: number;
}

const initialState: CartState = {
    cart: [],
    allPrice: 0,
};

const addAllPrice = (state: any, cart: AppItem[]) => {
    state.allPrice = cart.reduce(
        (acc, obj: AppItem) => acc + obj.price * obj.count,
        0
    );
};
const clearCart = (state: any) => {
    state.cart = [];
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        plusCounter: (state, action: PayloadAction<AppItem>) => {
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
            addAllPrice(state, state.cart);
        },
        minusCounter: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1) {
                const item = state.cart[index];
                if (item && item.count !== undefined && item.count > 0) {
                    item.count -= 1;
                }
            }
            if (state.cart[index].count === 0) {
                state.cart.splice(index, 1);
            }
            addAllPrice(state, state.cart);
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            state.cart.splice(index, 1);
            addAllPrice(state, state.cart);
        },
    },
});

export const { plusCounter, minusCounter, deleteItem } = cartSlice.actions;

export const selectCart = (state: RootState) => state.CartSlice;

export default cartSlice.reducer;
