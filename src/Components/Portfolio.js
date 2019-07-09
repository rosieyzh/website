import React, { Component } from 'react';
import Gallery from './Gallery.js';

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Coding Projects...</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {/* 1 */}
              <div key="Style Transfer with Studio Ghibli Images" className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://github.com/rosieyzh/MAIS202-Style-Transfer" title="Style Transfer with Studio Ghibli Images">
                  <img alt="Style Transfer with Studio Ghibli Images" src="images/portfolio/styletransfer.jpg"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>"Style Transfer with Studio Ghibli Images"</h5>
                      <p>"Pytorch implementation for MAIS202 Final Project."</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>

          {/* 2 */}
            
              <div key="ClimateTimes" className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://github.com/rosieyzh/climate-score" title="ClimateTimes">
                  <img alt="ClimateTimes" src="images/portfolio/climatetimes.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>"ClimateTimes"</h5>
                      <p>"Analysis of news articles covering climate change using sentiment analysis, word embeddings and topic modelling. Project as part of 2019 AIForGood cohort."</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>

          {/* 3 */}
            
              <div key="Fractal Generator" className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://rosieyzh.github.io/lipschitz/" title="Fractal Generator">
                  <img alt="Fractal Generator" src="images/portfolio/fractal.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>"Fractal Generator"</h5>
                      <p>"Based off of the H-Tree Fractal. Used Processing.js library and HTML/CSS."</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>

          {/* 4 */}
            
              <div key="Nim Game" className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://github.com/rosieyzh/nim" title="Nim Game">
                  <img alt="Nim Game" src="images/portfolio/nim.png"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>"Nim Game"</h5>
                      <p>"Eating donuts meets mathematical strategy! Used Processing for Java."</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>
            </div>
            <h1>...and artwork!</h1>
            <Gallery ></Gallery>
          </div>

      </div>

   </section>
    );
  }
}

export default Portfolio;
