import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import "./SideDrawer.css";
import Backdrop from '../../UI/backdrop/backdrop';
import Hoc from '../../../hoc/hoc'

const sideDrawer=(props)=>{
    let attachedClasses = "SideDrawer "+"Close";
    if(props.open)
    {
        attachedClasses = "SideDrawer "+"Open";
    }
    return(
        <Hoc>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses}>
                <div >
                    <Logo height={90} margin={32} />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Hoc>
    );
};
export default sideDrawer;