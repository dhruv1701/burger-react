import React from 'react';
import "./Toolbar.css";
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';



const toolbar =(props)=>(
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div>
            <Logo height={45}/>
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;