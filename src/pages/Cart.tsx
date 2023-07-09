import React from 'react';
import trash from '../assets/trash.png';
import cl from '../style/Cart.module.css';
import CartItem from '../components/CartItem';
import { useAppSelector } from '../hooks';
import { selectCart } from '../redux/slice/CartSlice';
import NoItem from '../components/NoItem';
const Cart: React.FC = () => {
    const { cart, allPrice } = useAppSelector(selectCart);
    return (
        <div className={cl.cart}>
            {cart.length > 0 ? (
                <div className={cl.wrapper}>
                    <h2 className={cl.title}>Корзина</h2>
                    <img className={cl.trash} src={trash} alt="" />
                </div>
            ) : <NoItem />}
            {cart.map((item) => (
                <CartItem key={item.id} {...item}></CartItem>
            ))}
            {allPrice > 0 && <h3>{allPrice + ' ₽'}</h3>}
            
        </div>
    );
};

export default Cart;
