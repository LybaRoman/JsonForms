import React from 'react';

interface ButtonProps {
    func: () => void;
    text: string;
}

export const MyButton: React.FC<ButtonProps> = ({ func, text }) => (
    <button
        onClick={func}
        style={{
            marginTop: '10px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        }}
    >
        {text}
    </button>
);
