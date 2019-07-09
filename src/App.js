import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
/*import Resume from './Components/Resume';*/
import IsoMath from './Components/Math';
import Portfolio from './Components/Portfolio';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <div className="App">
          <Header/>
          <About/>
          <Portfolio/>
          {/*<Resume data={this.state.resumeData.resume}/>*/}
          <IsoMath/>
          <Footer/>
      </div>
    );
  }
}

export default App;
