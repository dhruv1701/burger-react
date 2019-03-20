import React,{Component} from 'react';
import Hoc from '../../../hoc/hoc'
import Button from '../../UI/Button/Button'
class ordersummary extends Component{

    componentWillUpdate(){
        console.log("order summary will update");
    }
    
    render(){
        const ingredientSummary =Object.keys(this.props.ingredients).map(igkey=>{
            return <li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}</li>
        });
        return(
            <Hoc>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.Price.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger"
                 clicked={this.props.purchaseCanceled} >CANCEL</Button>
                <Button btnType="Success"
                clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Hoc>
        );
    }
    
};

export default ordersummary;