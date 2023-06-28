import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from '../hooks';
import { fetchSushi } from '../redux/slice/SushiSlice';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

import MainLayout from '../Layout/MainLayout';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchSushi());
    }, [dispatch]);
    
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
