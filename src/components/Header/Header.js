import React from 'react';
import './Header.css';
import img from './github-img.png';



const Header = () => {
  return (
    <div className='Header'>
        <h1>Github!</h1>
        <img src = {img} alt='Github' width='150px'></img>
    </div>
  )
}

export default Header