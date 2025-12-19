function RecipeModal({ recipe, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="close-button" onClick={onClose}>×</button>

                <h2>{recipe.strMeal}</h2>

                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="modal-image"
                />

                <p>{recipe.strInstructions}</p>

            </div>
        </div>
    );
}

export default RecipeModal;