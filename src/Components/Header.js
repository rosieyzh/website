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
                 <li key="linkedin"><a href="https://www.linkedin.com/in/rosieyzh/"><i className="fa fa-linkedin"></i></a></li>
                 <li key="github"><a href="http://github.com/rosieyzh"><i className="fa fa-github"></i></a></li>
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