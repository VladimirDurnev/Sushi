import { configureStore } from '@reduxjs/toolkit';

import SushiSlice from './slice/HomeSlice';
import CartSlice from './slice/CartSlice';
export const store = configureStore({
    reducer: { SushiSlice, CartSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
