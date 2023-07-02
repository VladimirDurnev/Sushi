import React, { MouseEventHandler } from 'react';

import cl from '../../style/Counter.module.css';

interface ICounter {
    children?: number;
    hendleClick?: MouseEventHandler<HTMLDivElement>;
    hendlePlus: MouseEventHandler<HTMLSpanElement>;
    hendleMinus: MouseEventHandler<HTMLSpanElement>;
}

const Counter: React.FC<ICounter> = ({
    children,
    hendleClick,
    hendlePlus,
    hendleMinus,
}) => {
    return (
        <div onClick={hendleClick} className={cl.counter}>
            <span onClick={hendleMinus}>-</span>
            <span>{children}</span>
            <span onClick={hendlePlus}>+</span>
        </div>
    );
};
export default Counter;
