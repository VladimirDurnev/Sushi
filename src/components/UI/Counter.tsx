import React, { MouseEventHandler } from 'react';

import minus from '../../assets/minus.png';
import plus from '../../assets/plus.png';
import cl from '../../style/Counter.module.css';

interface ICounter {
    children?: number;
    width?: number;
    height?: number;
    hendleClick?: MouseEventHandler<HTMLDivElement>;
    hendlePlus: MouseEventHandler<HTMLSpanElement>;
    hendleMinus: MouseEventHandler<HTMLSpanElement>;
}

const Counter: React.FC<ICounter> = ({
    children,
    width,
    height,
    hendleClick,
    hendlePlus,
    hendleMinus,
}) => {
    return (
        <div style={{width, height}} onClick={hendleClick} className={cl.counter}>
            <img onClick={hendleMinus} src={minus} alt="" />
            <span>{children}</span>
            <img onClick={hendlePlus} src={plus} alt="" />
        </div>
    );
};
export default Counter;
