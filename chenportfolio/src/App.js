import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ConceptArt from './Components/conceptArt';
import Illustration from './Components/Illustration';
import Contact from './Components/Contact';
import Study from './Components/Study';
import TraditionalArt from './Components/traditionalArt';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      portfolioData: {}
    };
  }

  getPortfolioData(){
    $.ajax({
      url:'/portfolioData.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({portfolioData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getPortfolioData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.portfolioData.main}/>
        <ConceptArt data={this.state.portfolioData.images}/>
        <Illustration data={this.state.portfolioData.images}/>
        <TraditionalArt data={this.state.portfolioData.images}/>
        <Study data={this.state.portfolioData.images}/>
        <Contact data={this.state.portfolioData.main}/>
        <Footer data={this.state.portfolioData.main}/>
      </div>
    );
  }
}

export default App;
