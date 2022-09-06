import React from 'react'
import './logo.css'
import logoImg from '../../../source/pngwing.com.png'
const Logo = () => {
  return (
    <div className="logo">
        <div>
            <img src={logoImg}  alt="logo" />
           <div>
            <span><b>cocktail</b></span>
        <p><b>Resturant & Bar</b></p>
        </div>
        </div>
    </div>
  )
}

export default Logo