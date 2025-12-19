function MealCard({ recipe, onSave }) {
    return (
        <div className="recipe-card">
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <a 
            href={`https://www.themealdb.com/meal.php?c=${recipe.idMeal}`}
            target="_blank"
            className="recipe-link"
            >
                View Recipe
            </a>

            {onSave && (
                <button className="save-recipe-button" onClick={() => onSave(recipe)}>
                    Save to Notebook
                </button>
            )}
            </div>
    );
}

export default MealCard;