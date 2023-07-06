import React from 'react';

import Counter from './UI/Counter';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addItemToCart, deleteItemFromCart } from '../redux/slice/CartSlice';
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
    const addToCart = () => {
        dispatch(
            addItemToCart({
                id,
                imgUrl,
                title,
                mass,
                description,
                price,
                category,
                count
            })
        );
    };
    const deleteItem = () => {
        if (id) {
            dispatch(deleteItemFromCart(id));
        }
    };
    return (
        <div className={cl.wrapper}>
            <img className={cl.sushi} src={imgUrl} alt="" />
            <div className={cl.description}>
                <div>{title}</div>
                {mass + 'г'}
            </div>
            <Counter hendlePlus={addToCart} hendleMinus={deleteItem}>{count}</Counter>
            {price + ' ₽'}
            <img className={cl.close} src={close} alt="" />
        </div>
    );
};

export default CartItem;
