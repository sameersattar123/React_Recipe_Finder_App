import './App.css';
import Navbar from './Components/Common/Navbar';
import Home from './Pages/Home';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Recipes from './Pages/Recipes';
import RecipeDetails from './Components/RecipeDetails';

function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/recipes/:recipeId" element={<RecipeDetails/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
