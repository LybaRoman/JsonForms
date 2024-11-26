import React from 'react';
import { FormElement } from './FormElement';

interface FormElementsListProps {
    formElements: any[];
}

export const FormElementsList: React.FC<FormElementsListProps> = ({ formElements }) => (
    <div
        style={{
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        }}
    >
        {formElements.map((element, index) => (
            <FormElement key={index} type={element.type} />
        ))}
    </div>
);
