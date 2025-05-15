import RecipeDetails from './RecipeDetails';

export default function MapRecipe({ recipe }) {
  if (!recipe.length) return <p>No recipes found.</p>;

  return (
    <div>
      {recipe.map((item, index) => {
        <div key={item.idMeal}/>
        const title = item.strMeal;
        const instructions = item.strInstructions;
        const image = item.strMealThumb;

        const ingredients = []

        for (let i = 1; i <= 20; i++) {
          const ingredient = item[`strIngredient${i}`];
          const measure = item[`strMeasure${i}`];
          if (ingredient && ingredient.trim()) {
            ingredients.push({ ingredient, measure });
          } else {
            break; // Stop when no more ingredients
          }
        }

        return (
          <div key={item.idMeal}>
            <RecipeDetails
              key={index}
              title={title}
              instructions={instructions}
              image={image}
              ingredients={ingredients}
            />
          </div>
        );
      })}
    </div>
  );
}