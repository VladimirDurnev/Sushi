import React from 'react';
import { Link } from 'react-router-dom';

import cl from '../style/NoItem.module.css';
import No from '../assets/No.png';

import Button from './UI/Button';

export default function NoItem() {
    return (
        <div className={cl.wrapper}>
            <img src={No} alt="" />
            <p className={cl.title}>Ой, а тут пусто!</p>
            <p className={cl.description}>Добавьте что-нибудь из меню</p>
            <Link to="/">
                <Button
                    width={300}
                    height={50}
                    background="linear-gradient(to bottom right, #ff6956, #921003)"
                    color="rgba(255,255,255)"
                >
                    Перейти в меню
                </Button>
            </Link>
        </div>
    );
}
