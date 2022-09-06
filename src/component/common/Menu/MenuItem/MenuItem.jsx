import React from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom'

const MenuItem = (item) => {
    const navigate= useNavigate()

 const {id,name,img,info,glass} =item
    return (
     <div className="item" >
        <img src={img} alt={name} />
        <div className="item-head_desc">
            <p className="head_desc-name">{name}</p>
            <p className="head_desc-info"><small>{info}</small></p>
        </div>
        <div className="item-foot_desc">
            <p className="foot_desc-glass">{glass}</p>
        </div>
            
        <button  onClick={()=>navigate(`/product/${id}`)}>
        <i className='fas fa-long-arrow-alt-right'></i>Dtails
        </button>

     </div>
  )
}

export default MenuItem