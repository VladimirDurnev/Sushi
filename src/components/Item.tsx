import React from 'react';

import { AppItem } from '../redux/slice/SushiSlice';
import cl from '../style/Item.module.css';

import Button from './UI/Button';

const Item: React.FC<AppItem> = ({
    imgUrl,
    title,
    mass,
    description,
    price,
}) => {
    return (
        <div className={cl.wrapper}>
            <img src={imgUrl} alt="" />
            <div className={cl.title}>
                <h3>{title}</h3>
                <p>{mass + ' г'}</p>
            </div>
            <p className={cl.description}>
                {description.length > 20 && description.substring(0, 100) + ' ...'}
            </p>

            <div className={cl.price}>
                <h3>{price + ' ₽'}</h3>
                <Button>В корзину</Button>
            </div>
        </div>
    );
};

export default Item;
