import React, { Component } from 'react';
import enfield from './lee-enfield.jpg'
import sten from './sten.jpg'
import lewis from './lewis.png'
import webley from './webley.jpg'
import './App.css';

class UK extends Component {

  constructor() {
    super();
    this.state = {
      randomWeapon:'standard',
      lastIndex:0
    };
  }

  cycleRight = () => {
    let num = this.state.lastIndex + 1;
    if (num === 4) {
      num = 0
    }
    const items = ["enfield", "sten", "lewis", "webley"];
    const item = items[num];
    this.setState({
      randomWeapon:item,
      lastIndex:num
    });
    console.log(item)
  }

  cycleLeft = () => {
    let num = this.state.lastIndex - 1;
    if (num === -1) {
      num = 3
    }
    const items = ["enfield", "sten", "lewis", "webley"];
    const item = items[num];
    this.setState({
      randomWeapon:item,
      lastIndex:num
    });
    console.log(item)
  }

  render() {
    if (this.state.randomWeapon === 'standard') {
      return (
        <div>
          <div>
            <button onClick={this.cycleRight} className='countryButton englandButton'>Explore</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'enfield') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Lee-Enfield</h1>
            <img src={enfield} alt='Error'></img>
            <h3>
            The UK's official service rifle for the first half of the 20th century
            was the famous Lee-Enfield rifle. Several versions of the rifle were
            manufactured due to improvements and special use cases. A version for
            jungle warefare was produced as well as a version for snipers. The rifle
            was eventually replaced by the L1A1 SLR in 1957. The Enfield features a
            reliable bolt-action design and fires the .303 British round. It had a
            10 round capacity.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'sten') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Sten Gun</h1>
            <img src={sten} alt='Error'></img>
            <h3>
            In the early years of the war, The British government purchased a large
            amount of Thompson Submachine Guns but could not aquire a sufficient amount
            of them due to the exorbitant cost. The British response was to create
            a new submachine gun which would be easy and inexpensive to manufacture.
            The weapon is made of stamped metal which require minimal welding and
            machining. The Sten Gun is a select-fire weapon which is capable of
            semi-automatic and fully automatic fire. Its 9mm round gives the user
            minimal recoil but deadly force. It accepted a staggering 32 round magazine.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'lewis') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Lewis Gun</h1>
            <img src={lewis} alt='Error'></img>
            <h3>
            From 1914 to 1953, The Lewis Gun was one of the UK's standard light
            machine guns though it had been largely replaced by the Bren gun for
            infantry and the Vickers K for the air force. The gun used an
            unconventional pan magazine which was attached to the top of the
            firearm rather than the bottom or side. But the peculiar appearance
            was more than compensated by its 47 round and 97 round magazines.
            It chambered the .303 British with some models also chambering the
            .30-06 round and fired at a rate of 500-600 rounds per minute.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'webley') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Webley Double Action Revolver</h1>
            <img src={webley} alt='Error'></img>
            <h3>
            From 1887 to 1970, the Webley Revolver served British military
            and law enforcement units. The revolver was capable of both single
            and double action fire. Its game changing top-break functionality
            allowed for quick reloads. It fired the .38 caliber round and its
            cylinder had a standard capacity of 6 rounds.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
  }
}

export default UK;