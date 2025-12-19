import MealCard from "./MealCard";

function MealList({ meals, onSave }) {
    if (!recipes || recipes.length === 0) {
        return <p>No recipes found.</p>;
    }
    return (
        <div className="meal-list">
            {recipes.map((recipe) => (
                <MealCard key={meal.idMeal} recipe={recipe} onSave={onSave} />
            ))}
        </div>
    );
}

export default MealList;