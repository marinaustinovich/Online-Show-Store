import React from 'react';
import { classname } from 'utils';

import './radio-buttons-group.scss';

type RadioButtonsGroupProps = {
    label?: string;
    options: string[];
    selectedOption: string | null;
    onSelect: (option: string) => void;
};

const cn = classname('radio-buttons-group');

export const RadioButtonsGroup = ({ label, options, selectedOption, onSelect }: RadioButtonsGroupProps) => {
    const handleOptionSelect = (option: string) => {
        onSelect(option);
    };

    return (
        <p className={cn()}>
            {label}
            {options?.map(option => (
                <span key={option} className={`catalog-item-size ${selectedOption === option ? 'selected' : ''}`} onClick={() => handleOptionSelect(option)}>
                    {option}
                </span>
            ))}
        </p>
    );
};
