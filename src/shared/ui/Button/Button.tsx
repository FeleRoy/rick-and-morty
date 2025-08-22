import React from 'react';

type ButtonProps = {
    onClick: () => void;
    text: string
};

const Button: React.FC<ButtonProps> = ({onClick, text}) => (
    <button onClick={onClick} className='border border-solid border-white rounded-xl cursor-pointer'>
        {text}
    </button>
);

export default Button;