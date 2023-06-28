import React from 'react';

import { useAppSelector } from '../hooks';

import Item from './Item';

const ListItem: React.FC = () => {
    const { list } = useAppSelector((state) => state.SushiSlice);
    return (
        <div>
            {list.map((obj) => (
                <Item key={obj.id} {...obj}/>
            ))}
        </div>
    );
};

export default ListItem;
