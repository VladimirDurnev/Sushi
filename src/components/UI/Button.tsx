import React from 'react';

import cl from '../../style/Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className={cl.MyButton}>{children}</button>;
};
export default Button;
