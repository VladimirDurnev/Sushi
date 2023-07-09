import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { selectCart } from '../redux/slice/CartSlice';
import { AppItem } from '../Type';
import {
    plusCounter,
    minusCounter,
    
} from '../redux/slice/CartSlice';
import cl from '../style/Item.module.css';

import Button from './UI/Button';
import PopupItem from './PopupItem';
import Counter from './UI/Counter';
const Item: React.FC<AppItem> = ({
    id,
    imgUrl,
    title,
    mass,
    description,
    price,
    category,
    count,
}) => {
    const { cart, } = useAppSelector(selectCart);
    const [ItemToCart, setItemToCart] = useState(0);
    useEffect(() => {
        const arr = cart.filter((item) => item.id === id);
        const b = arr.reduce(
            (accumulator, currentValue) => accumulator + currentValue.count,
            0
        );

        setItemToCart(b);
    }, [cart]);
    const dispatch = useAppDispatch();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const hendlePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

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
    };
    const deleteItem = () => {
        if (id) {
            dispatch(minusCounter(id));
        }
    };
    return (
        <>
            <div className={cl.wrapper} onClick={hendlePopup}>
                {isPopupOpen && (
                    <PopupItem
                        imgUrl={imgUrl}
                        title={title}
                        mass={mass}
                        description={description}
                        price={price}
                        category={category}
                        count={count}
                    />
                )}
                <img className={cl.imgUrl} src={imgUrl} alt="" />
                <div className={cl.title}>
                    <h3>
                        {title && title?.length > 20
                            ? title.substring(0, 20) + '...'
                            : title}
                    </h3>

                    <span>{mass + ' г'}</span>
                </div>
                <p className={cl.description}>
                    {description.length > 20 &&
                        description.substring(0, 100) + ' ...'}
                </p>

                <div className={cl.price}>
                    <h3>{price + ' ₽'}</h3>
                    {ItemToCart < 1 ? (
                        <Button
                            hendleClick={(e) => {
                                e.stopPropagation();
                                addToCart();
                            }}
                        >
                            В корзину
                        </Button>
                    ) : (
                        <Counter
                            hendleClick={(e) => e.stopPropagation()}
                            hendlePlus={() => addToCart()}
                            hendleMinus={deleteItem}
                        >
                            {ItemToCart}
                        </Counter>
                    )}
                </div>
            </div>
        </>
    );
};

export default Item;
