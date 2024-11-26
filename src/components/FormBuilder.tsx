import React, { useState } from 'react';
import { SelectElement } from './SelectElement';
import { JsonOutput } from './JsonOutput';
import { MyButton } from './MyButton';
import { FormElementsList } from './FormElementsList';

const FormBuilder: React.FC = () => {
    const [selectedElement, setSelectedElement] = useState<string>('');
    const [formElements, setFormElements] = useState<any[]>([]);
    const [finalJson, setFinalJson] = useState<string | null>(null);

    const handleAddElement = () => {
        if (selectedElement) {
            const newElement = { type: selectedElement };
            setFormElements([...formElements, newElement]);
            setSelectedElement('');
        }
    };

    const handleConvertToJson = () => {
        const jsonResult = formElements.map((element, index) => {
            switch (element.type) {
                case 'input':
                    return {
                        [`input`]: {
                            type: 'text',
                            value: 'Input Text',
                        },
                    };
                case 'textarea':
                    return {
                        [`textarea`]: {
                            type: 'textarea',
                            value: 'Textarea Content',
                        },
                    };
                case 'checkbox':
                    return {
                        [`checkbox`]: {
                            type: 'checkbox',
                            value: 'Checked',
                        },
                    };
                case 'button':
                    return {
                        [`button`]: {
                            type: 'button',
                            value: 'Button Text',
                        },
                    };
                default:
                    return {};
            }
        });

        const finalJsonResult = {
            form: jsonResult,
        };

        setFinalJson(JSON.stringify(finalJsonResult, null, 2));
    };

    return (
        <div
            style={{
                padding: '16px',
                width: '400px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            }}
        >
            <SelectElement
                selectedElement={selectedElement}
                onSelectElement={(value) => setSelectedElement(value)}
            />
            <MyButton func={handleAddElement} text={"Додати елемент"} />
            <FormElementsList formElements={formElements} />
            <MyButton func={handleConvertToJson} text={" Конвертувати в JSON"} />
            <JsonOutput finalJson={finalJson} />


        </div>
    );
};

export default FormBuilder;
