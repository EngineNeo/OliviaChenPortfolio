import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ConceptArt from './Components/conceptArt';
import moreCA from './Components/moreCA';
import Illustration from './Components/Illustration';
import Contact from './Components/Contact';
import Study from './Components/Study';
import TraditionalArt from './Components/traditionalArt';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      portfolioData: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header/>
              <ConceptArt/>
              <Illustration/>
              <Study/>
              <TraditionalArt/>
              <Contact/>
              <Footer/>
            </Route>
            <Route path="/moreCA" component={moreCA}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
