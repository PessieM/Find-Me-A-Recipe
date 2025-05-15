import ResultsButton from './ResultsButton';
import resultStyle from './Results.module.css';
import btnStyle from './Button.module.css';

export default function Results({ results }) {

    return (
        <div className={resultStyle.result}>
            {results.map((item) => (
                    <ResultsButton className={btnStyle.resultBtn}
                        key={item.idMeal}
                        id={item.idMeal}
                        label={item.strMeal} />
            ))}
        </div>
    )
}