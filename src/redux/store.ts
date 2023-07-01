import { configureStore } from '@reduxjs/toolkit';

import SushiSlice from './slice/HomeSlice';

export const store = configureStore({
    reducer: { SushiSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
