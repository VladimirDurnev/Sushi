import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { AppItem } from '../../Type';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CartState {
    cart: AppItem[];
    allPrice: number;
}

const initialState: CartState = {
    cart: [
        {
            id: 1,
            imgUrl: 'https://yobi.efood.dev/images/_2xRIVufmElKDKLTm3H7qs7QYi9P4EdKjQHaXm1p4Pg/pr:large/b3dxaGFyMDE2MDJj/OTBqcmFkb3lleDdo/cnVpcA',
            title: 'ЁбиМокуёби',
            mass: 710,
            description: 'Сяке хат, Филадельфия темпура, Бешеный лосось',
            price: 949,
            category: 'Наборы',
            count: 1,
        },
        {
            id: 2,
            imgUrl: 'https://yobi.efood.dev/images/-Zujz5rkhLe3ETZDtT9rkW2ZGUOS7f_T0DIALZ2XTpg/pr:large/NWZ6ZWV4eWp5bXM4/cjZtbmdnaGh3MHVy/bm9xbA',
            title: 'Филадельфия BIG',
            mass: 305,
            description:
                'Рис, мицукан, сахар, комбу, соль, нори, сыр сливочный, огурец, лосось',
            price: 649,
            category: 'Премиум',
            count: 1,
        },
    ],
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
