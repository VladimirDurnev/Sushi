import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
// import  './MainLayout.css';
import cl from '../style/MainLayout.module.css';

const MainLayout: React.FC = () => {
    return (
        <div className={cl.wrapper}>
            <Header></Header>
            <Filter></Filter>
            <div className={cl.container}>
                <Outlet />
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
