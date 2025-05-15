export default function RecipeDetails({ title, instructions, image, ingredients }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} width="30%"/>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>
                        {item.measure} {item.ingredient}
                    </li>
                ))}
            </ul>
            <h3>Instructions</h3>
            {/* one paragraph of instructions */}
            <p>{instructions}</p>
            {/* or each sentence on a new line */}
            {/* <p>{instructions.split('.').map((sentence, index) => (
                    sentence.trim() && <span key={index}>{sentence.trim()}.<br /></span>
            ))}
            </p> */}
        </div>
    );
}