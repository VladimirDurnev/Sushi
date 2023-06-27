import React from 'react';
import { Link } from 'react-router-dom';

import cl from '../style/Header.module.css';
import logo from '../assets/sushi.png';
const Header: React.FC = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.company}>
                <Link to=""><img src={logo} alt="logo" className={cl.logo} /></Link>
                <div>
                    <h1>УбиДаУби</h1>
                    <p>sushi && rolls</p>
                </div>
                <div className={cl.city}>
                    Ваш город Тольятти
                    <a href="tel:+380441234567">+38 (044) 123-45-67</a>
                </div>
            </div>
            <button>Войти</button>
        </div>
    );
};

export default Header;
