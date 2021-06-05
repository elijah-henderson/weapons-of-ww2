import React, { Component } from 'react';
import kar98 from './kar98k.jpg'
import mp40 from './mp-40.jpg'
import stg44 from './stg-44.jpg'
import p38 from './p38.jpg'
import './App.css';

class Germany extends Component {

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
    const items = ["kar98", "mp40", "stg44", "p38"];
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
    const items = ["kar98", "mp40", "stg44", "p38"];
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
            <button onClick={this.cycleRight} className='countryButton germanyButton'>Explore</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'kar98') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Karabiner 98k</h1>
            <img src={kar98} alt='Error'></img>
            <h3>
            On June 21st 1935, the Nazi government made the
            Karabiner 98k Germany's standard issue service rifle.
            This tried and true bolt-action rifle proved itself
            to be both reliable and deadly. The weapon could be
            fitted with a bayonette, a scope, a silencer and was
            capable of firing rifle grenades. It fired the 7.92x57mm
            round and featured a fixed 5 round magazine.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'mp40') {
      return (
        <div>
          <div className='homePage'>
            <h1>The MP-40</h1>
            <img src={mp40} alt='Error'></img>
            <h3>
            This infamous and terrifying weapon almost
            needs no intruction as it has long been a
            symbol of ingenuity and brutality of the
            Nazi war machine featured in both Hollywood
            films and video games. Contrary to popular
            belief, not all German soldiers carried the 
            MP-40 as the Karabiner 98k was the standard
            service rifle. But it was certainly not an
            uncommon sight! The MP-40 fired the 9mm round
            at 500-550 rounds per minute. 32 round magazines
            were first issued with 64 round dual magazines
            being issued as well later on to counter the
            Soviet PPSH-41's 71 round capacity.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'stg44') {
      return (
        <div>
          <div className='homePage'>
            <h1>The StG 44</h1>
            <img src={stg44} alt='Error'></img>
            <h3>
            The StG 44 or Sturmgewehr 44 ("meaning Assault Rifle 44") is
            credited as being the very first assault rifle ever created.
            This new weapon was designed and manufactured to eventually
            replace both the Karabiner 98k and the MP-40 as it could fill
            both roles. Capable of both semi-automatic fire with great
            accuracy at long distances and and fully automatic fire,
            the new German Assault Rifle was a game changing and revolutionary
            weapon which later went on to influence the design of the AK-47.
            Its 7.92x33mm rifle round was smaller than the standard rifle round
            but was far superior to the MP-40's pistol round. It accepted a 30
            round magazine and fired at a rate of 500-600 rounds per minute.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'p38') {
      return (
        <div>
          <div className='homePage'>
            <h1>The P38 Semiautomatic Pistol</h1>
            <img src={p38} alt='Error'></img>
            <h3>
            Designed in 1938 and subsequently manufactured and adopted by
            the German military in 1939, the P38 semiautomatic pistol was a
            revolutionary weapon for its time and mnay of its features still
            remain relevant today. It was the first locked-breech pistol to
            use a double-action/single-action (DA/SA) trigger. It chambered
            the ever popular 9x19mmm round and had a capacity of 8 rounds.
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

export default Germany;