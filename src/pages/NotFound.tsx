import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/404.png';
import Button from '../components/UI/Button';
import cl from '../style/NotFound.module.css';
const NotFound = () => {
    return (
        <div className={cl.wrapper}>
            <img src={error} alt="" />
            <h4 className={cl.title}>Кажется что-то пошло не так!</h4>
            <h5 className={cl.description}>
                Страница, которую вы запрашиваете, не существует. Возможно она
                была удалена, или вы набрали неверный адрес.
            </h5>
            <Link to="/">
                <Button
                    width={250}
                    height={50}
                    background="linear-gradient(to bottom right, #ff6956, #921003)"
                    color="rgb(255,255,255)"
                >
                    Перейти на главную
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;
