import React, { useState, useEffect } from 'react';

import Counter from './UI/Counter';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
    plusCounter,
    minusCounter,
    deleteItem,
} from '../redux/slice/CartSlice';
import { selectCart } from '../redux/slice/CartSlice';
import close from '../assets/close.png';

import { AppItem } from '../Type';
import cl from '../style/CartItem.module.css';
const CartItem: React.FC<AppItem> = ({
    id,
    imgUrl,
    title,
    mass,
    description,
    price,
    category,
    count,
}) => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector(selectCart);
    const [priceItem, setPriceItem] = useState(price);
    useEffect(() => {
        setPriceItem(price * count);
    });
    const addToCart = () => {
        dispatch(
            plusCounter({
                id,
                imgUrl,
                title,
                mass,
                description,
                price,
                category,
                count,
            })
        );
        setPriceItem(price * (count + 1));
    };
    const minus = () => {
        id && dispatch(minusCounter(id));
    };
    const deleteElem = () => {
        id && dispatch(deleteItem(id));
    };
    return (
        <div className={cl.wrapper}>
            <img className={cl.sushi} src={imgUrl} alt="" />
            <div className={cl.description}>
                <div>{title}</div>
                {mass + ' г'}
            </div>
            <Counter hendlePlus={addToCart} hendleMinus={minus}>
                {count}
            </Counter>
            {priceItem + ' ₽'}
            <img className={cl.close} src={close} alt="" onClick={deleteElem} />
        </div>
    );
};

export default CartItem;
