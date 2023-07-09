import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';


// import  './MainLayout.css';
import cl from '../style/MainLayout.module.css';

const MainLayout: React.FC = () => {
    return (
        <>
            <div className={cl.wrapper}>
                <Header></Header>
                <div className={cl.container}>
                    <Outlet />
                </div>
                {/* <Footer></Footer> */}
            </div>
        </>
    );
};

export default MainLayout;
