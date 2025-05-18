import styles from './Header.module.css'
import imgStyle from './Image.module.css'
import Logo from './Logo.png';

function Header() {
    return (
      <header className={styles.header}>
        <img src={Logo} alt="Logo" className={imgStyle.logo}/>
      </header>
    );
  }
  
  export default Header;