import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppItem {
    id?: number;
    imgUrl: string;
    title: string;
    mass: number;
    description: string;
    price: number;
    category: string;
    rating: number;
}

interface AppState {
    list: AppItem[];
    category: string[];
    promotion: string[];
}
export const fetchSushi = createAsyncThunk<AppItem[]>(
    'sushi/fetchSushi',
    async () => {
        const { data } = await axios.get('http://localhost:3000/sushi');
        return data;
    }
);
export const fetchPromotion = createAsyncThunk(
    'sushi/fetchPromotion',
    async () => {
        const { data } = await axios.get('http://localhost:3000/promotion');
        return data;
    }
);

const initialState: AppState = {
    list: [],
    category: [],
    promotion: [],
};

export const SushiSlice = createSlice({
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
                const arr = state.list.map((obj) => obj.category);
                state.category = [...new Set(arr)];
            })
            .addCase(fetchSushi.rejected, (state, action) => {});
        builder.addCase(fetchPromotion.fulfilled, (state, action) => {
            state.promotion = action.payload;
        });
    },
});

// export const { increment, decrement, incrementByAmount } = SushiSlice.actions;

export default SushiSlice.reducer;
