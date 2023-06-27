import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState, AppDispatch } from './redux/store';

export const useAppDispatch: (...args: any[]) => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
