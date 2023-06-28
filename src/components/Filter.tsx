import React from 'react';
import { Link } from 'react-router-dom';

import cl from '../style/Filter.module.css';

import { useAppSelector } from '../hooks';

import Button from './UI/Button';

const Filter: React.FC = () => {
    const { category } = useAppSelector((state) => state.SushiSlice);
    return (
        <div className={cl.wrapper}>
            {category.map((item) => (
                <Link to={item} className={cl.category}>
                    {item}
                </Link>
            ))}
            <Link to="cart">
                <Button>Корзрна</Button>
            </Link>
        </div>
    );
};

export default Filter;
