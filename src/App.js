import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import IdFinderForm from './components_2/IdFinder';
import Header from './components/Header';
import TodoList from './components_1/TodoList';

class App extends Component {

  render(){
    return(
      <Router>
        <div>
        <Header/>
            <Route path="/" exact component={TodoList}></Route>
            <Route path="/idFinder" component={IdFinderForm}></Route>
       </div>
      </Router>
    )
  }
}
export default App;
