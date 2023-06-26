import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

// import  './MainLayout.css';
import cl from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={cl.wrapper}>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
