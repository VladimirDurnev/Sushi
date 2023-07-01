import React from 'react';

import cl from '../style/PopupItem.module.css';
import { AppItem } from '../redux/slice/HomeSlice';
import Counter from './UI/Counter';
import Button from './UI/Button';

const PopupItem: React.FC<AppItem> = ({
    imgUrl,
    title,
    mass,
    description,
    price,
}) => {
    return (
        <div className={cl.overlay}>
            <div className={cl.popup} onClick={(e) => e.stopPropagation()}>
                <img src={imgUrl} alt="" />
                <div className={cl.description}>
                    <div className={cl.description__two}>
                        <h3>{title}</h3>
                        <p>{mass + ' г'}</p>
                        <p>{description}</p>
                    </div>
                    <div className={cl.counter}>
                        <Counter></Counter>
                        <Button
                            background="linear-gradient(to bottom right, #ff6956, #921003)"
                            color="rgba(243, 237, 237)"
                            width={210}
                        >
                            {'Добавить ' + price + ' ₽'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PopupItem;
