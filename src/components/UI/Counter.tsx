import React from 'react';
import cl from '../../style/Counter.module.css';
import plus from '../../assets/plus.png';
const Counter: React.FC = () => {
    return (
        <div className={cl.counter}>
            <button>-</button>
            <p>1</p>
            <button>
                <img src={plus} alt="" />
            </button>
        </div>
    );
};
export default Counter;
