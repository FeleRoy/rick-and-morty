import React from 'react';

interface InputProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    inputId: string;
    placeholder?: string;
    value?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    onChange,
    type = 'text',
    inputId,
    placeholder,
    value
}) => {
    return (
        <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor={inputId}>{label}</label>
            <input
                className='p-1 border border-solid border-white rounded-lg'
                id={inputId}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};

export default Input;