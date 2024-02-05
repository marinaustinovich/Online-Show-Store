import React from 'react';

export type ListItem = {
    text: string;
};

type Props = {
    list: ListItem[];
};

export const OrderedList = ({ list }: Props) => (
    <ol>
        {list.map((item, index) => (
            <li key={index}>{item.text}</li>
        ))}
    </ol>
);
