import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from '../hooks';
import { fetchSushi, fetchPromotion } from '../redux/slice/HomeSlice';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import MainLayout from '../Layout/MainLayout';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchSushi());

        dispatch(fetchPromotion());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="Cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
