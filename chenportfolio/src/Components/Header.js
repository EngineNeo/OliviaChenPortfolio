import React, { Component } from 'react';

const logo = "images/logo/logo_red.png"

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="navbar-logo" href=""><a className="smoothscroll" href="#home">
               <img src={logo} alt="Home" style={{
                  height: "5rem", 
                  width: "5rem",}}></img></a>
            </li>
            <li><a className="smoothscroll" href="#conceptArt">Concept Art</a></li>
	         <li><a className="smoothscroll" href="#illustration">Illustration</a></li>
            <li><a className="smoothscroll" href="#traditionalArt">Tradtional Art</a></li>
            <li><a className="smoothscroll" href="#study">Study</a></li>
            <li><a className="smoothscroll" href="#contact">Contact Me</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#conceptArt"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
