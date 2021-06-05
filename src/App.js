import React from 'react';
import './App.css';
import Nav from './NavComponent';
import US from './AmericaComponent';
import UK from './EnglandComponent';
import USSR from './SovietComponent';
import Germany from './GermanyComponent';
import Japan from './JapanComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import music from './music.mp3'

function App() {
  return (
    <Router>
      <Audio/>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/us' component={US}/>
          <Route path='/uk' component={UK}/>
          <Route path='/ussr' component={USSR}/>
          <Route path='/germany' component={Germany}/>
          <Route path='/japan' component={Japan}/>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='homePage'>
      <h1>Weapons of The Second World War</h1>
      <h3>WW2 was a global conflict like no other before it.
      The great nations of the world mustered their soldiers, scientists, and engineers
      to develop the dealiest fighting forces possible. The war killed an estimated 70-85
      million people. Discover some of the most prolific and famous arms of all time
      that altered the course of human history and changed the world forever.</h3>
    </div>
  );
}

function Audio() {
  return (
    <ReactAudioPlayer
      src={music}
      autoPlay
      loop
    />
  );
}

export default App;
