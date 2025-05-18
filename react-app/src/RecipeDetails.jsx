import BackButton from './BackButton';

export default function RecipeDetails({ title, instructions, image, ingredients }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title} width="30%"/>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>
                        {item.measure} {item.ingredient}
                    </li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <p>{instructions}</p>
            <BackButton />
        </div>
    );
}