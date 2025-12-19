import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MealResult from './components/MealResult'
import MealCard from './components/MealCard'
import Notebook from './components/Notebook'

function App() {
  const [meals, setMeals] = useState([]);
  const [notebook, setNotebook] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => setMeals([data.meals[0]]));
  }
  , []);

  return (
    <div>
      <SearchBar setMeals={setMeals} />
      <MealResult meals={meals} setNotebook={setNotebook} />
    </div>
  )
}


export default App