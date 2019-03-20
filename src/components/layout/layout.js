import React,{Component} from "react";
import Hoc from "../../hoc/hoc";
import  "./layout.css";
import Toolbar from '../navigation/Toolbar/Toolbar';
import SideDrawer from '../navigation/SideDrawer/SideDrawer'
class Layout extends Component {

    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return({showSideDrawer: !this.state.showSideDrawer})
        }
    )
    }
  render(){
    return (
        <Hoc>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className="Content">
                {this.props.children}
            </main>
        </Hoc>
         )
    }
}

export default Layout;