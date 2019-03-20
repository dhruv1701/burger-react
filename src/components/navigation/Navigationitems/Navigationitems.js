import React from 'react';
import './Navigationitems.css';
import NavigationItem from './Navigationitem/Navigationitem';
const navigationitems=(props)=>(
    <ul className="NavigationItems">
        <NavigationItem link="/" exact >Burger Builder</NavigationItem>
        <NavigationItem link="/orders"  >Orders</NavigationItem>

    </ul>
);
export default navigationitems;