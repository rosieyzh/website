import React, { Component } from 'react';
import Isomorphism from './Isomorphism.js';
import { Link } from 'react-router-dom';

import Typist from 'react-typist';

class Header extends Component {
  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var point_1= this.props.data.point_1;
      var point_2= this.props.data.point_2;
      var point_3= this.props.data.point_3;
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
              <li className="current"><a className="smoothscroll" href="#home">ℝ/ℤ</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
              <li><a className="smoothscroll" href="#math">Math</a></li>
              {/*
                <li><a className="smoothscroll" href="/blog">Blog</a></li>
              */}
              
           </ul>

        </nav>

        <div className="row banner">
          <Isomorphism></Isomorphism>
           <div className="banner-text">
              <Typist 
                    className="Typing"
                    avgTypingDelay={70}
                    stdTypingDelay={20}
                    startDelay={5500}
                    cursor = {{show: false}}
                >
                <h2 className="responsive-headline">Hi,<Typist.Delay ms={300} /> I'm Rosie Zhao.</h2>
                <div className="bullets">
                  <Typist.Delay ms={500} />
                    <p>I'm a Math/CS student at McGill University, and I</p>
                    <p> <a className="smoothscroll" href="#portfolio">> often code & doodle</a> </p>
                    <p> <a className="smoothscroll" href="#math">> love math</a> </p>
                    <p> > occasionally write (coming soon) </p>
                </div>
                </Typist>
              <ul className="social">
                 {networks}
              </ul>
           </div>
        </div>

        <p className="scrolldown">
           <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
   </header>
    );
  }
}

export default Header;