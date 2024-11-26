import React from 'react';
import { useState } from 'react';
interface FormElementProps {
    type: string;
}

export const FormElement: React.FC<FormElementProps> = ({ type }) => {
    const [value, setValue] = useState<string>('');
    switch (type) {
        case 'input':
            return (
                <input
                    type="text"
                    placeholder="Input Field"
                    style={{
                        boxSizing: 'border-box',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '100%',
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            );
        case 'button':
            return (
                <input
                    type="submit"
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '100%',
                        color: '#fff',
                        backgroundColor: '#999',
                    }}
                />
            );
        case 'textarea':
            return (
                <textarea
                    placeholder="Textarea"
                    rows={4}
                    style={{
                        boxSizing: 'border-box',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '100%',
                        resize: 'none',
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            );
        case 'checkbox':
            return (
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input type="checkbox" />
                    <span>Checkbox</span>
                </label>
            );

        default:
            return null;
    }
};
