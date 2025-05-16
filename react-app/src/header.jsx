import styles from './Header.module.css'
import imgStyle from './Image.module.css'
function Header() {
    return (
      <header className={styles.header}>
        <img src="Logo.png" alt="Logo" className={imgStyle.logo}/>
        {/* <h1>Find-Me-A-Recipe</h1> */}
      </header>
    );
  }
  
  export default Header;