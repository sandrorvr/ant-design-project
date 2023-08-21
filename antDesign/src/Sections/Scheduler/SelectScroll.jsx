import React from 'react';
import { Select } from 'antd';

const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}

export const SelectScroll = () => (
    <Select
        mode="tags"
        placeholder="Select Name"
        style={{
            width: '100px',
        }}
        options={options}
    />
);