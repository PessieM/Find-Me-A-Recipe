import { useState } from 'react';
import Form from './Form';
import Results from './Results';
import styles from './Form.module.css';

export default function Home() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {
            setLoading(true); // Start loading
            setError("");
            //display recipe if it exists, if not display error message
            try{
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
                const data = await response.json();
                if(!data.meals){
                    setError("No recipes found. Try a different search!");
                    setResults([]);
                }
                else{
                    setResults(data.meals);
                }
            }
            catch(err){
                setError("Error.Try again.");
                setResults([]);
            }
            setLoading(false);

    };

    return (
        <div>
            <Form onSearch={handleSearch} setSearch={setSearch}/>
            {loading ? <p>Loading...</p> :<Results results={results} />}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
}
