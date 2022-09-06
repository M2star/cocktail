import React,{useState,useEffect, } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchChocktails} from '../../../redux/feactures/CocktailSlice'

import MenuItem from './MenuItem/MenuItem'

import './style.css'

const Menu =() => {
  
    const [modifiedCocktails, setModifiedCocktails] = useState([]);
  
    const { loading, cocktails, error } = useSelector(state => ({ ...state.app, }))
  
  
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchChocktails());
    },[dispatch]);
  
    useEffect(() => {
      if (cocktails) {
        const newCocktails = cocktails.map(item => {
          const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } = item;
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setModifiedCocktails(newCocktails)
      } else { setModifiedCocktails([]) }
  
  
  
    }, [cocktails]);
  
    if (loading) {
      return (<h3>Loading...</h3>)
    }
    if(!cocktails) {
      <Menu >
      <h2>Not this cocktail are present</h2>
      </Menu>

    }
    
    if (error) {
      return (<p>{error.massage}</p>)
    }
  
  return (
    <main > 
    
       {modifiedCocktails.map((item) => ( 
      <MenuItem 
      id={item.id}
      img={item.img}
      name={item.name}
      glass={item.glass}
      info={item.info}
      key={item.id}/>  
      ))} 
      </main>
      )
}

export default Menu