function RecipeModal({ recipe, onClose }) {
    if (!recipe) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="modal-close" onClick={onClose}>X</button>

                <h2>{recipe.strMeal}</h2>

                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="modal-image"
                />

                <h3>Ingredients</h3>
                <ul>
                    {Object.keys(recipe)
                        .filter(key => key.startsWith("strIngredient") && recipe[key])
                        .map((key, index) => (
                            <li key={index}>{recipe[key]}</li>
                        ))}
                </ul>

                <h3>Instructions</h3>
                <p className="modal-instructions">{recipe.strInstructions}</p>
            </div>
        </div>
    );
}

export default RecipeModal;