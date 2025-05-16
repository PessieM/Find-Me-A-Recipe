import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MapRecipe from './MapRecipe';
import styles from './Details.module.css';

export default function Details() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setRecipe(data.meals || []);
    };

    if (id) fetchRecipe();
  }, [id]);

  return (
    <div className={styles.details}>
      {recipe.length ? <MapRecipe recipe={recipe} /> : <p>Loading...</p>}
    </div>
    );
}