import React from 'react';

interface InputProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    inputId: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    onChange,
    type = 'text',
    inputId,
    placeholder,
}) => {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor={inputId}>{label}</label>
            <input
                className='p-1 border border-solid border-white rounded-lg'
                id={inputId}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;