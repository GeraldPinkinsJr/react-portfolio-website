import React from 'react'
import './Header.css'
import Cta from './Cta.js'
import ME from '../../assets/Me.jpeg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
<header>
  <div className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Gerald Pinkins</h1>
    <h4 className="text-light">Fullstack Developer</h4>
    <h5 className='number'>(870)209-2928  geraldpinkinsjr@gmail.com </h5>
    <Cta />
    <HeaderSocials />

    <div className='me1'> 
    <img src={ME} alt="me" />
    </div>
  
  <a href='#contact' className='scroll__down'>Scroll Down</a>
  </div>
</header>
  )
}

export default Header