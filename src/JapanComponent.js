import React, { Component } from 'react';
import katana from './katana.jpg'
import arisaka from './type-99.png'
import type99 from './japan-lmg.JPG'
import nambu from './nambu.jpg'
import './App.css';

class Japan extends Component {

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
    const items = ["katana", "arisaka", "type99", "nambu"];
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
    const items = ["katana", "arisaka", "type99", "nambu"];
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
            <button onClick={this.cycleRight} className='countryButton japanButton'>Explore</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'katana') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Guntō</h1>
            <img src={katana} alt='Error'></img>
            <h3>
            In 1876, the Haitōrei Edict largely banned the
            the carrying of swords in public with the exception of
            former samuri lords, military, and police. Japanese
            swordsmiths struggled to find work until Japan's conflict
            with China in the 1930s and throughout WW2. Guntōs or
            "military swords" were massed produced during the war
            and officers were required to wear a sword at all times.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'arisaka') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Arisaka</h1>
            <img src={arisaka} alt='Error'></img>
            <h3>
            The Arisaka or the type 99 rifle was Imperial Japan's
            standard issue service rifle during WW2. 2,500,000 million
            units were manufactured throughout the war. Various models
            were utilized including a dedicated sniper version and a
            takedown version for paratroopers. It was chambered in the
            7.7×58mm round and included a fixed magazine with a capacity
            of 5 rounds.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'type99') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Type 99 Light Machine Gun</h1>
            <img src={type99} alt='Error'></img>
            <h3>
            In 1939 the Japanese Imperial Army began to develop a new and superior
            light machine gun which would replace the old Type 96 light machine gun.
            The result was Type 99 which chambered 7.7x58mm round. The weapon's unique
            design featured a top-mounted 30 magazine as opposed to the more common
            bottom-mounted magazine. It could sustain a rate of fire of 800 rounds
            per minute. After the war, the Type 99 went on to be welded by Chinese
            and North Korean forces in the Korean war and by the North Vietnamese
            in the First and Second Indochina Wars.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'nambu') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Nambu Semiautomatic Pistol</h1>
            <img src={nambu} alt='Error'></img>
            <h3>
            The Nambu pistol was designed to replace the Type 26
            Revolver. In 1926, the Japanese Imperial Army officially
            adopted it as its standard issue sidearm. The Nambu pistol
            has a reputation of not being as reliable and powerful as
            other WW2 era pistols such as the 1911 and the P38. It was
            chambered in the 8x22mm round and had a capacity of 8 rounds.
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

export default Japan;