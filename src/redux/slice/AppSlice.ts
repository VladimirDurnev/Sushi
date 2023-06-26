import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
    value: number;
}   

const initialState: AppState = {
    value: 0,
};

export const AppSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});


export const { increment, decrement, incrementByAmount } = AppSlice.actions;

export default AppSlice.reducer;
