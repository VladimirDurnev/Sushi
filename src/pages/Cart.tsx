import React from 'react';
import trash from '../assets/trash.png';
import cl from '../style/Cart.module.css';
import CartItem from '../components/CartItem';
const Cart: React.FC = () => {
    return (
        <div className={cl.cart}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Корзина</h3>
                <img src={trash} alt="" />
            </div>
            <CartItem></CartItem>
        </div>
    );
};

export default Cart;
