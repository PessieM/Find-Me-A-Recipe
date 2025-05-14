import { useState } from 'react';
import Form from './Form';
import Results from './Results';

export default function Home() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await response.json();
            setResults(data.meals || []);
    };

    return (
        <div>
            <Form onSearch={handleSearch} setSearch={setSearch}/>
            <Results results={results} />
        </div>
    );
}
