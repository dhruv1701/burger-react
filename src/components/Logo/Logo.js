import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';
const logo=(props)=>{
    return (
    <div className="Logo" style={{height: props.height+"px",margin:props.margin+"px"}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
    );
};

export default logo;