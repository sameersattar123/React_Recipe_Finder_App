import { API_URL } from "../Constants/Constant"
import axios from "axios"

export const getRecipes = async(searchQuery) => {
    try {
        const response = await axios.get(`${API_URL}/search?q=${searchQuery}`)
        return response.data 
    } catch (error) {
        console.log(error)
    }
}
export const getRecipe = async(searchQuery) => {
    try {
        const response = await axios.get(`${API_URL}/get?rId=${searchQuery}`)
        return response.data 
    } catch (error) {
        console.log(error)
    }
}