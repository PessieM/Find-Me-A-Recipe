import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;