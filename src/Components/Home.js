import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import IsoMath from './Math';
import Portfolio from './Portfolio';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="Home">
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Portfolio data={this.state.resumeData.portfolio}/>
          <Resume data={this.state.resumeData.resume}/>
          <IsoMath data={this.state.resumeData.testimonials}/>
          <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default Home;