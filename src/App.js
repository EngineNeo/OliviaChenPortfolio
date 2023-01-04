import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ConceptArt from './Components/conceptArt';
import MoreCA from './Components/moreCA';
import Illustration from './Components/Illustration';
import Modeling from './Components/Modeling';
import Contact from './Components/Contact';
import Study from './Components/Study';
import TraditionalArt from './Components/traditionalArt';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import ScrollToTop from './Components/ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioData: {},
    };
  }

  render() {
    return (
      <div className="App">
        <Router basename="/oliviachenportfolio">
          <ScrollToTop />
          <Switch>
            <AnimatePresence exitBeforeEnter>
              <Route exact path="/" basename={process.env.PUBLIC_URL}>
                <Header />
                <ConceptArt />
                <Illustration />
                <Modeling />
                <Study />
                <TraditionalArt />
                <Contact />
                <Footer />
              </Route>
              <Route path="/moreCA" basename={process.env.PUBLIC_URL}>
                <MoreCA />
                <Footer />
              </Route>
              {/* Add a catch-all route to return the index.html file for all routes */}
              <Route path="*">
                <Header />
                <ConceptArt />
                <Illustration />
                <Modeling />
                <Study />
                <TraditionalArt />
                <Contact />
                <Footer />
              </Route>
            </AnimatePresence>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;