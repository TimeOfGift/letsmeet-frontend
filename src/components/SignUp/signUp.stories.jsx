import React, {component} from 'react';
import SignUp from './index';

export default {
    title: 'Event Meet/SignUp Page',
    component: SignUp,
    args : {
        text : 'Sign Up', 
        textColor: 'black',
        rectWidth: '100px',
        rectColor: 'green',
        
    }
}

export const Every = (args) => <SignUp {...args} />
