import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

// import  './MainLayout.css';
import cl from '../style/MainLayout.module.css';

const MainLayout: React.FC = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <Header></Header>
                <Outlet />
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
