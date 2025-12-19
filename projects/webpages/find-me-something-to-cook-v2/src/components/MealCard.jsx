function MealCard({ recipe, onSave, onView }) {
    return (
        <div className="recipe-card">
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <button
                className="view-recipe-button"
                onClick={() => onView(recipe)}
            >
                View Recipe
            </button>

            {onSave && (
                <button className="save-recipe-button" onClick={() => onSave(recipe)}>
                    Save to Notebook
                </button>
            )}
        </div>
    );
}

export default MealCard;