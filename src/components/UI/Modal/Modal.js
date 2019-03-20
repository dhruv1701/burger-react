import React,{Component} from 'react';
import './Modal.css';
import Hoc from "../../../hoc/hoc";
import Backdrop from "../backdrop/backdrop";
class modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!== this.props.show || nextProps.children !== this.props.children;
    }
    componentWillUpdate(){
        console.log("modal will update");
    }
    render(){
        return(
        <Hoc>
            <Backdrop show={this.props.show}clicked={this.props.modalClosed}/>  
            <div className="Modal"
                style={{transform :this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Hoc>
        );
    }
    
}
export default modal;