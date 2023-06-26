import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MainLayout from '../Layout/MainLayout';
const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
