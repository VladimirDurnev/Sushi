import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import cl from '../style/Filter.module.css';
import logo from '../assets/sushi.png';

import { useAppSelector } from '../hooks';
import { selectCart } from '../redux/slice/CartSlice';

import { selectSushi } from '../redux/slice/HomeSlice';

import Button from './UI/Button';

const Filter: React.FC = () => {
    const { category } = useAppSelector(selectSushi);
    const { cart } = useAppSelector(selectCart);
    const [isSticky, setIsSticky] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const rect = wrapper.getBoundingClientRect();
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;

            if (scrollTop >= rect.top) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className={cl.wrapper + ' ' + (isSticky ? cl.active : '')}
        >
            <div className={cl.container}>
                {isSticky && (
                    <ScrollLink
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={cl.category}
                    >
                        <img className={cl.logo} src={logo} alt="logo"></img>
                    </ScrollLink>
                )}
                {category.map((item) => (
                    <ScrollLink
                        key={item}
                        activeClass="active"
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={cl.category}
                    >
                        {item}
                    </ScrollLink>
                ))}
                <RouterLink to="Cart">
                    <Button
                        background="linear-gradient(to bottom right, #ff6956, #921003)"
                        color="rgba(255,255,255)"
                    >
                        {(cart.length > 0) ? 'Корзрна ' + cart.length : 'Корзрна'}
                    </Button>
                </RouterLink>
            </div>
        </div>
    );
};

export default Filter;
