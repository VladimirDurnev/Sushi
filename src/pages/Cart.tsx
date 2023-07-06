import React from 'react';
import trash from '../assets/trash.png';
import cl from '../style/Cart.module.css';
import CartItem from '../components/CartItem';
import { useAppSelector } from '../hooks';
import { selectCart } from '../redux/slice/CartSlice';
const Cart: React.FC = () => {
    const { cart } = useAppSelector(selectCart);
    return (
        <div className={cl.cart}>
            <div className={cl.wrapper}>
                <h2 className={cl.title}>Корзина</h2>
                <img className={cl.trash} src={trash} alt="" />
            </div>
            {cart.map((item) => (
                <CartItem key={item.id} {...item}></CartItem>
            ))}
        </div>
    );
};

export default Cart;
