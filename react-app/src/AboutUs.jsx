import styles from './AboutUs.module.css'
function AboutUs() {
    return (
      <>
        <div className={styles.aboutUs}>
        <h1 className={styles.title}>About Us</h1> 
        <h2>Welcome to Find Me a Recipe, your go-to destination for exploring delicious meals based on the foods you love. Whether you're craving meaty entrees, cheesy pizzas, fresh seafood dishes, or sweet treats, we make it easy to discover recipes that match your taste.</h2>
        <h2>How It Works</h2>
        <ol>
            <li>Search by Food Type – Enter a category like "meat," "pizza," "fish," or "cookie" to explore curated recipes.</li>
            <li>Browse Recipe Options – Instantly find a selection of dishes pulled from trusted sources using real-time API calls.</li>
            <li>Get Full Recipe Details – Click on a recipe to access step-by-step instructions, ingredient lists, and expert cooking tips.</li>
        </ol>
        <h2>Why Choose Us?</h2>
        <ul>
            <li>Food-Based Search – Skip the guesswork and search for meals by category rather than ingredients.</li>
            <li>Real-Time Recipe Details – Up-to-date recipes with clear instructions and nutritional info.</li>
            <li>User-Friendly Experience – Quick, intuitive, and perfect for every home cook.</li>
        </ul>
        <h2>At Find Me a Recipe, we believe that cooking should be exciting, effortless, and tailored to your cravings. Start searching today and discover your next favorite dish!
        </h2>
        </div>
        </>  
    );
  }
  
  export default AboutUs;