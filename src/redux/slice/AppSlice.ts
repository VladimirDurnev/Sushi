import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { PayloadAction } from '@reduxjs/toolkit';

interface AppItem {
    id: number;
    imgUrl: string;
    title: string;
    category: string;
    rating: number;
}

interface AppState {
    list: AppItem[];
}
export const fetchSushi = createAsyncThunk<AppItem[]>(
    'sushi/fetchByIdStatus',
    async () => {
        const { data } = await axios.get('http://localhost:3000/sushi');
        return data;
    }
);

const initialState: AppState = {
    list: [],
};

export const AppSlice = createSlice({
    name: 'sushi',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSushi.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(fetchSushi.rejected, (state, action) => {});
    },
});

// export const { increment, decrement, incrementByAmount } = AppSlice.actions;

export default AppSlice.reducer;
