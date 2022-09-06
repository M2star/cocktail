import React from 'react'
import './style.css'
import cocktailImg from '../../../source/Cocktail.png'
import Logo from '../../common/Logo/Logo'

const Banner = ({ handleScrollMenu}) => {

  return (
    <header>
      <div className="header-content">
        <Logo />
        
        <div className="content-main">
          <h1>Delicious Drinks for Your Cravings</h1>
          <p>we made fresh and best cocktails with different brand drinks</p>
        </div>
      </div>
      <img src ={cocktailImg} className="header-img" alt='bannner' style={{width:"50%"}} />
    </header>
  )
}

export default Banner