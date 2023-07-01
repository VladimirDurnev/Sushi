import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../hooks';
import { AppItem } from '../redux/slice/HomeSlice';
import { overlayTogle } from '../redux/slice/HomeSlice';
import cl from '../style/Item.module.css';

import Button from './UI/Button';
import PopupItem from './PopupItem';
const Item: React.FC<AppItem> = ({
    imgUrl,
    title,
    mass,
    description,
    price,
    category,
}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dispath = useAppDispatch();
    const hendlePopup = () => {
        dispath(overlayTogle());
        setIsPopupOpen(!isPopupOpen);
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
                    <h3>{title}</h3>
                    <p>{mass + ' г'}</p>
                </div>
                <p className={cl.description}>
                    {description.length > 20 &&
                        description.substring(0, 100) + ' ...'}
                </p>

                <div className={cl.price}>
                    <h3>{price + ' ₽'}</h3>
                    <Button hendleClick={(e) => e.stopPropagation()}>
                        В корзину
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Item;
