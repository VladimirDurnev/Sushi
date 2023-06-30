import React from 'react';

import cl from '../../style/Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    width?: number;
    height?: number;
    backgroundColor?: string;
    background?: string
    color?: string;
    borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    width,
    height,
    backgroundColor,
    background,
    color,
    borderColor,
}) => {
    return (
        <button
            style={{ width, height, backgroundColor, background, color, borderColor }}
            className={cl.MyButton}
        >
            {children}
        </button>
    );
};
export default Button;
