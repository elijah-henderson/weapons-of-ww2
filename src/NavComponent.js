import React from 'react';
import { Link } from 'react-router-dom';
import us from './us.jpg'
import uk from './uk.png'
import ussr from './ussr.jpg'
import germany from './germany.jpg'
import japan from './japan.png'
import './App.css';

function Nav() {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav>
        <Link className="navButton navHomeButton" style={navStyle} to='/'>Weapons of WW2</Link>
        <ul className='nav-links'>
            <Link className="navButton" style={navStyle} to='/us'>
              <img src={us} alt='US Flag' className='icon'></img>
            </Link>
            <Link className="navButton" style={navStyle} to='/uk'>
              <img src={uk} alt='UK Flag' className='icon'></img>
            </Link>
            <Link className="navButton" style={navStyle} to='/ussr'>
              <img src={ussr} alt='USSR Flag' className='icon'></img>
            </Link>
            <Link className="navButton" style={navStyle} to='/germany'>
              <img src={germany} alt='Nazi Flag' className='icon'></img>
            </Link>
            <Link className="navButton" style={navStyle} to='/japan'>
              <img src={japan} alt='Japanese Flag' className='icon'></img>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;