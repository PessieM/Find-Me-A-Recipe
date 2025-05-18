import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MapRecipe from './MapRecipe';
import styles from './Details.module.css';

export default function Details() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
        setLoading(true); // Start loading
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setRecipe(data.meals || []);
        setLoading(false); // Stop loading

    };

    if (id) fetchRecipe();
  }, [id]);

  return (
    <div className={styles.details}>
      {loading ? <p>Loading...</p> : <MapRecipe recipe={recipe} />}
    </div>
    );
}