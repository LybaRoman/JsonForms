import React from 'react';

interface SelectElementProps {
    selectedElement: string;
    onSelectElement: (value: string) => void;
}

export const SelectElement: React.FC<SelectElementProps> = ({ selectedElement, onSelectElement }) => {
    return (
        <select
            value={selectedElement}
            onChange={(e) => onSelectElement(e.target.value)}
            style={{
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
            }}
        >
            <option value="" disabled>
                Виберіть елемент
            </option>
            <option value="input">Input</option>
            <option value="textarea">Textarea</option>
            <option value="checkbox">Checkbox</option>
            <option value="button">Button</option>
        </select>
    );
};
