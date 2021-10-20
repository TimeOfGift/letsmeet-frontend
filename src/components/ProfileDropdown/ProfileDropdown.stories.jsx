import React, { Component } from 'react';
import ProfileDropdown from './index';

export default {
    title : 'Event Meet/ Profile Dropdown',
    component: ProfileDropdown,
    args: {
        userName : 'Bolaji Olajide', 
        
    
    
    }
}

export const myArg = (args) => <ProfileDropdown {...args} />
