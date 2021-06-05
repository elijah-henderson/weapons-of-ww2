import React, { Component } from 'react';
import garand from './garand.jpg'
import carbine from './carbine.jpg'
import thompson from './thompson.jpg'
import m1911 from './1911.jpg'
import './App.css';

class US extends Component {

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
    const items = ["garand", "carbine", "thompson", "1911"];
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
    const items = ["garand", "carbine", "thompson", "1911"];
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
            <button onClick={this.cycleRight} className='countryButton americaButton'>Explore</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'garand') {
      return (
        <div>
          <div className='homePage'>
            <h1>The M1 Garand</h1>
            <img src={garand} alt='Error'></img>
            <h3>
            The M1 Garand was the first semi-automatic rifle ever to be given to US troops.
            The Nazis had to eventually create their own semi-automatic rifle to match the M1.
            With lethal stopping power and excellent accuracy, the M1 Garand has been
            credited with securing American victory in WW2. The rifle is stil popular today
            among civilians. It fires the devastating .30-06 round and has a capacity of 8 rounds.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'carbine') {
      return (
        <div>
          <div className='homePage'>
            <h1>The M1 Carbine</h1>
            <img src={carbine} alt='Error'></img>
            <h3>
            The M1 Carbine was a popular compact version of the M1 Garand.
            This version of the proven US battle rifle was lighter and more compact.
            It was even cheaper to manufactor than both the Thompson and its predecessor.
            Though its .30 Carbine round is inferior to the standard .30-06,
            soldiers were able to carry more ammunition. US forces carried
            magazines with a staggering 15 round with 30 round magazines also
            available.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'thompson') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Thompson Submachine Gun</h1>
            <img src={thompson} alt='Error'></img>
            <h3>
            Famously known for its admiration by 1920s American gangsters,
            the Thompson Submachine or better known as the "Tommy Gun" was
            adopted by the US military in 1938. The gun was very high quality
            and reliable but extremely expensive. Its use was limited but
            served as a highly effective force multiplier. Its .45 caliber
            round and fully automatic fire has been known to literally saw
            limbs off! It accepted 20 round, 30 round, 50 round, and even
            100 round magazines.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === '1911') {
      return (
        <div>
          <div className='homePage'>
            <h1>The M1911 Semiautomatic Pistol</h1>
            <img src={m1911} alt='Error'></img>
            <h3>
            The M1911 or simple 1911 semiautomatic pistol is yet
            another classic firearm that almost needs no introduction.
            The US military adopted the 1911 due to the need of a reliable
            semiautomatic pistol with the incredible stopping power of the
            .45 caliber round. It was the primary sidearm of US forces in WW2
            and remains extremely popular today with soldiers, veterans, and
            citizens alike. It accepted 7 and 8 round box magazines.
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

export default US;