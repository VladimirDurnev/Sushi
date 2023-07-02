import React from 'react';
import { Link } from 'react-router-dom';

import cl from '../style/Header.module.css';
import logo from '../assets/sushi.png';

import Button from './UI/Button';
const Header: React.FC = () => {
    return (
        <div id="home" className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.company}>
                    <Link to="">
                        <div className={cl.link}>
                            <img src={logo} alt="logo" className={cl.logo} />

                            <div className={cl.name}>
                                <h1>Эдо</h1>
                                <h3>Sushi & Rolls</h3>
                            </div>
                        </div>
                    </Link>
                    <div className={cl.city}>
                        Ваш город Тольятти
                        <a href="tel:+380441234567">+38 (044) 123-45-67</a>
                    </div>
                </div>
                <Link to="user">
                    <Button width={100} height={35}>
                        Войти
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
