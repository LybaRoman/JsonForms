import React from 'react';

interface JsonOutputProps {
    finalJson: string | null;
}

export const JsonOutput: React.FC<JsonOutputProps> = ({ finalJson }) => {
    if (!finalJson) return null;

    return (
        <textarea
            style={{
                boxSizing: 'border-box',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
                minHeight: '500px',
                resize: 'none',
            }}
            value={finalJson}
            readOnly
        />
    );
};
