import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { selectCart } from '../redux/slice/CartSlice';
import { AppItem } from '../redux/slice/HomeSlice';
import { addItemToCart, deleteItemToCart } from '../redux/slice/CartSlice';
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
}) => {
    const { cart } = useAppSelector(selectCart);
    const [ItemToCart, setItemToCart] = useState(0);
    useEffect(() => {
        setItemToCart(cart.filter((item) => item.id === id).length);
    }, [cart]);
    const dispatch = useAppDispatch();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const hendlePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
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
            })
        );
    };
    const deleteItem = () => {
        if (id) {
            dispatch(deleteItemToCart(id));
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
                    />
                )}
                <img src={imgUrl} alt="" />
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
                    {ItemToCart === 0 ? (
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
                            hendlePlus={addToCart}
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
