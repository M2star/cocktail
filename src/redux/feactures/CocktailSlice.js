import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchChocktails = createAsyncThunk("cocktails/fetchCocktails",async()=>
{
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then(
        (res)=> res.json()
    );
}
);

export const fetchSearchChocktails = createAsyncThunk("cocktails/fetchCocktails",async({searchText})=>
{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`).then(
        (res)=> res.json()
    );
}
);

export const fetchSingleChocktails = createAsyncThunk(
    'cocktails/fetchSingleChocktails',
    async({id}) =>{
        return fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=>res.json())
    }
)

const cocktailSlice = createSlice({
    name:'cocktais',
    initialState:
    {
        loading:false,
        cocktails:[],
        error:null,
        cocktail:[],
    },
    extraReducers:{
        [fetchChocktails.pending]:(state ,action) =>{
            state.loading = true
        },
        [fetchChocktails.fulfilled]:(state,action) =>{
            state.loading =false;
            state.cocktails = action.payload.drinks  
        },
        [fetchChocktails.rejected]:(state,action) =>{
            state.loading =false;
            state.cocktails = action.paylaod
        },

        [fetchSingleChocktails.pending]:(state ,action) =>{
            state.loading = true
        },
        [fetchSingleChocktails.fulfilled]:(state,action) =>{
            state.loading =false;
            state.cocktail = action.payload.drinks  
        },
        [fetchSingleChocktails.rejected]:(state,action) =>{
            state.loading =false;
            state.cocktail = action.paylaod
        },

        [fetchSearchChocktails.pending]:(state ,action) =>{
            state.loading = true
        },
        [fetchSearchChocktails.fulfilled]:(state,action) =>{
            state.loading =false;
            state.cocktails = action.payload.drinks  
        },
        [fetchSearchChocktails.rejected]:(state,action) =>{
            state.loading =false;
            state.cocktails = action.paylaod
        },

        



    },
});

export default cocktailSlice.reducer;