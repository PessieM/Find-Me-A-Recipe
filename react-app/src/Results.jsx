import ResultsButton from './ResultsButton';

export default function Results({ results }) {

    return (
        <div>
            {results.map((item) => (
                    <ResultsButton
                        key={item.idMeal}
                        id={item.idMeal}
                        label={item.strMeal} />
            ))}
        </div>
    )
}