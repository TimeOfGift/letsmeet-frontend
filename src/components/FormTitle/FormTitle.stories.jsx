import React from 'react';
import FormTitle from './index';

export default {
    title: 'Event Meet/Form Title',
    component: FormTitle,
    args: {
        text : 'Update Event', 
        textColor: 'blue',
        rectWidth: '100px',
        rectColor: 'green'
    }
}

export const All = (args) => <FormTitle {...args} />
