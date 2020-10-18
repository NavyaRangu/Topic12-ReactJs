import React, { Component } from 'react';
import Home from './Home.js';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
class App extends Component{
   render(){
      return(
         <div>
            <h1>Hello World</h1>
            <ul>
            <li>Home</li>
            </ul>
            {this.props.children}
         </div>
      );
   }
}
export default App;