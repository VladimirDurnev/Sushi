import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

import cl from '../style/Filter.module.css';
import logo from '../assets/sushi.png';

import { useAppSelector } from '../hooks';

import Button from './UI/Button';

const Filter: React.FC = () => {
    const { category } = useAppSelector((state) => state.SushiSlice);
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
                    
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={cl.category}
                    >
                        <img className={cl.logo} src={logo} alt="logo"></img>
                    </Link>
                )}
                {category.map((item) => (
                    <Link
                        activeClass="active"
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={cl.category}
                    >
                        {item}
                    </Link>
                ))}
                <Link to="cart">
                    <Button>Корзрна</Button>
                </Link>
            </div>
        </div>
    );
};

export default Filter;
