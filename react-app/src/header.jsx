import styles from './Header.module.css'
import imgStyle from './Image.module.css'
function Header() {
    return (
      <header className={styles.header}>
        <img src="Logo.png" alt="Logo" className={imgStyle.logo}/>
      </header>
    );
  }
  
  export default Header;