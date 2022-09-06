import {configureStore} from '@reduxjs/toolkit'
import cocktailSlice from './feactures/CocktailSlice'



export default configureStore ({
    reducer:{
        app: cocktailSlice,    
    }
})