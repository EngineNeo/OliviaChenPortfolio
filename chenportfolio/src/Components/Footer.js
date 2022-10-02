import React, { Component } from 'react';
import {animateScroll as scroll, scroller } from 'react-scroll'

class Footer extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

 scrollToTop() {
    scroll.scrollToTop({
       duration: 1000,
       delay: 0,
       smooth: 'easeInOutQuart'
    });
  }

 scrollTo(pageRef) {
  scroller.scrollTo(pageRef, {
    duration: 1000,
    delay: 0,
    smooth: 'easeInOutQuart'
  })
}

_isMounted = false;

state = {
  header: [],
  loading: false,
};

componentDidMount() {
  this._isMounted = true;
  this.setState({ loading: true });
  fetch("portfolioData.json")
    .then(data => data.json())
    .then(data =>
      this.setState(
        {
          header: data.main,
          loading: false
        })
    );
}
componentWillUnmount() {
  this._isMounted = false;
}


  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>Website design by <a title="Neo" href="http://www.neomaralit.com/">Neo</a></li>
           </ul>

        </div>
        <div id="go-top"><a title="Back to Top" href="#" onClick={() => this.scrollToTop()}><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
