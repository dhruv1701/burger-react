import React from 'react';
import './Navigationitem.css';
import {NavLink} from 'react-router-dom';

const navigationitem=(props)=>(
    <li className="NavigationItem">
        <NavLink 
            to={props.link}
            exact={props.exact}
            /*activeClassName="active"*/
        >{props.children}</NavLink>
    </li>
);
export default navigationitem;