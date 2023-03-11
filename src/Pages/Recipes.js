import React, { useEffect, useState } from 'react'
import RecipesList from '../Components/RecipesList'
import Search from '../Components/Search'
import { getRecipes } from '../Services/Api'

const Recipes = () => {
  const [searchQuery , setSearchQuery] = useState("pizza")
  const [recipes , setRecipes] = useState([])

  
  const getSearchResult = async() => {
    const result = await getRecipes(searchQuery);
    if(result && result.recipes){
      setRecipes(result.recipes)
    }
  }
  useEffect(()=> {
    getSearchResult()
  },[searchQuery])
  return (
    <>
        <Search setSearchQuery={setSearchQuery} />
        <RecipesList recipes={recipes} searchQuery={searchQuery}/>
    </>
  )
}

export default Recipes