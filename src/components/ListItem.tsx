import React from 'react';

import { useAppSelector } from '../hooks';
import cl from '../style/ListItem.module.css';

import Item from './Item';

const ListItem: React.FC = () => {
    const { list } = useAppSelector((state) => state.SushiSlice);
    const sushiSet = list.filter((obj) => obj.category === 'Наборы');
    const sushiPremium = list.filter((obj) => obj.category === 'Премиум');
    const sushiRoll = list.filter((obj) => obj.category === 'Роллы и суши');
    const tempura = list.filter((obj) => obj.category === 'Темпура');
    const sushiBaked = list.filter((obj) => obj.category === 'Запечённые');
    const HotAndSalads = list.filter((obj) => obj.category === 'Горячее и салаты');
    return (
        <>
            <h2 id="Наборы" className={cl.title}>Наборы</h2>
            <div className={cl.wrapper}>
                {sushiSet.map((obj) => (
                    <Item key={obj.id} {...obj} />
                ))}
            </div>
            <h2 id="Премиум" className={cl.title}>Премиум</h2>
            <div className={cl.wrapper}>
                {sushiPremium.map((obj) => (
                    <Item key={obj.id} {...obj} />
                ))}
            </div>
            <h2 id="Роллы и суши" className={cl.title}>Роллы и суши</h2>
            <div className={cl.wrapper}>
                {sushiRoll.map((obj) => (
                    <Item key={obj.id} {...obj} />
                ))}
            </div>
            <h2 id="Темпура" className={cl.title}>Темпура</h2>
            <div className={cl.wrapper}>
                {tempura.map((obj) => (
                    <Item key={obj.id} {...obj} />
                ))}
            </div>
            <h2 id="Запечённые" className={cl.title}>Запечённые</h2>
            <div className={cl.wrapper}>
                {sushiBaked.map((obj) => (
                    <Item key={obj.id} {...obj} />
                ))}
            </div>
            <h2 id="Горячее и салаты" className={cl.title}>Горячее и салаты</h2>
            <div className={cl.wrapper}>
                {HotAndSalads.map((obj) => (
                    <Item key={obj.id} {...obj} />
                ))}
            </div>
        </>
    );
};

export default ListItem;
