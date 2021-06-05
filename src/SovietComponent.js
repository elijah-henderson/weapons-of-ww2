import React, { Component } from 'react';
import mosin from './mosin-nagant.jpg'
import ppsh from './ppsh.jpg'
import rpd from './rpd.png'
import tokarev from './tokarev.jpg'
import './App.css';

class USSR extends Component {

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
    const items = ["mosin", "ppsh", "rpd", "tokarev"];
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
    const items = ["mosin", "ppsh", "rpd", "tokarev"];
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
            <button onClick={this.cycleRight} className='countryButton sovietButton'>Explore</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'mosin') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Mosin-Nagant</h1>
            <img src={mosin} alt='Error'></img>
            <h3>
            The Mosin-Nagant is the longest serving military rifle in the world.
            It was the standard issue service rifle of the Russian Empire and
            The Soviet Union. Over 37 million units were manufactured and the
            weapon has been used in various conflicts across the globe. The
            Mosin-Nagant is a bolt-action rifle that fires the 7.62 Russian
            round which is not to be confused with the 7.62x39mm which is
            the current rifle round used by Russia and NATO today. It featured
            a fixed 5 round magazine.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'ppsh') {
      return (
        <div>
          <div className='homePage'>
            <h1>The PPSH-41</h1>
            <img src={ppsh} alt='Error'></img>
            <h3>
            The PPSH-41 is an imposing and eternal symbol of both
            Russian resiliance in the face of German opression and
            revolution. After the war, the weapon found its way into
            the hands of the Vietcong and the Korean People's Army.
            The weapon fired the standard 7.62×25mm Russian pistol
            caliber and its standard 71 round drum magazine gave the
            Soviet forces a massive advantage over the German army's
            MP-40 Submachinegun.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'rpd') {
      return (
        <div>
          <div className='homePage'>
            <h1>The RPD</h1>
            <img src={rpd} alt='Error'></img>
            <h3>
            The RPD was the Soviet Unions primary light machine gun from
            1944 to 1961. It was designed during the final years of the
            Second World War and saw limited use in 1945. Though eventually
            supplanted by RPK light machine gun in 1961, the RPD is still used
            by militaries in many African and Asian nations. The RPD fired the
            7.62×39mm round at a rate of 650 rounds per minute from a non-disintegrating
            100-round segmented belt stored in a drum container.
            </h3>
          </div>
          <div>
            <button onClick={this.cycleLeft} className='navLink'>Previous</button>
            <button onClick={this.cycleRight} className='navLink'>Next</button>
          </div>
        </div>
      );
    }
    if (this.state.randomWeapon === 'tokarev') {
      return (
        <div>
          <div className='homePage'>
            <h1>The Tokarev Semiautomatic Pistol</h1>
            <img src={tokarev} alt='Error'></img>
            <h3>
            Issued in 1930 to replace the Nagant M1895 Revolver, the
            TT-30 semiautomatic pistol became the official Soviet sidearm
            of both infantry and police forces alike until 1952. It fired
            the 7.62x25mm round and accepted both 8 and 9 round box magazines.
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

export default USSR;