import MealCard from "./MealCard";

function MealList({ recipes, onSave, onView }) {
    if (!Array.isArray(recipes) || recipes.length === 0) {
        return <p>No recipes found.</p>;
    }
    return (
        <div className="meal-list">
            {recipes.map((recipe) => (
                <MealCard 
                key={recipe.idMeal} 
                recipe={recipe} 
                onSave={onSave}
                onView={onView} />
            ))}
        </div>
    );
}

export default MealList;