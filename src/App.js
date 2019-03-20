import React, { Component } from 'react';
import Layout from './components/layout/layout';
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder"
import Checkout from './containers/Checkout/Checkout';
import {Route} from 'react-router-dom';
import burgerbuilder from './containers/burgerbuilder/burgerbuilder';
import Switch from 'react-router-dom/Switch';
import Orders from './containers/Orders/Orders';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/" exact component={burgerbuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
