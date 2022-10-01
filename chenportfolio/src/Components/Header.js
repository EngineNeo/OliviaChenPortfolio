import React, { Component } from 'react';
import {animateScroll as scroll, scroller } from 'react-scroll'

const logo = "images/logo/logo_white.png"

class Header extends Component {

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

   //  if(this.props.data){
   //    var name = this.props.data.name;
   //    var description= this.props.data.description;
   //    var networks= this.props.data.social.map(function(network){
   //      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   //    })
   //  }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="navbar-logo" href=""><a href="#home" onClick={() => scroll.scrollToTop()}>
               <img 
               className="logo-img1" 
               src={logo} 
               alt="Home" 
               style={{
                  height: "4.75rem", 
                  width: "4.75rem",
                  verticalAlign: "middle",
                  }}
               ></img>
               </a>
            </li>
            <li><a href="#conceptArt" onClick={() => this.scrollTo("conceptArt")}>Concept Art</a></li>
	         <li><a href="#illustration" onClick={() => this.scrollTo("illustration")}>Illustration</a></li>
            <li><a href="#study" onClick={() => this.scrollTo("study")}>Study</a></li>
            <li><a href="#traditionalArt" onClick={() => this.scrollTo("traditionalArt")}>Traditional Art</a></li>
            <li><a href="#contact" onClick={() => this.scrollTo("contact")}>Contact Me</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{this.state.header.name}</h1>
            <h3>{this.state.header.description}.</h3>
            <ul className="social">
               {this.state.header.networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#conceptArt" onClick={() => this.scrollTo("conceptArt")}><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
