import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { fetchSearchChocktails } from '../../../redux/feactures/CocktailSlice';
import './search.css'
const Search = () => {

const searchTerm = useRef();
const dispatch =useDispatch()
const handleChange = () =>
{
  const searchText = searchTerm.current.value
  dispatch(fetchSearchChocktails({searchText}))
}



const handleSubmit =(e) =>{
  e.preventDefault()
}
  return (
    <>
    <form onSubmit={handleSubmit}>

    <div className='container'>
      <input type="search"
      onChange={handleChange} 
      ref={searchTerm}
      className='search-text'
      placeholder='Search here...'
       />
       {/* <i className='fas fa-search' ></i> */}
    </div>
    </form>
    </>
  )
}

export default Search