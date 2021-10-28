import React, { Component } from 'react';
import SignUp from './index';

export default {
    title: 'Event Meet/SignUp Page',
    component: SignUp,
    details : {
        text : 'Sign Up', 
        textColor: 'black',
        rectWidth: '100px',
        rectColor: 'yellow',
        
    }
}

export const Every = (details) => <SignUp {...details} />
