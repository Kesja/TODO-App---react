import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <Link className={styles.icon} to="/">
          <span className={' fa fa-tasks'} />
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navElem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navElem}>
            <Link to="/favorite">Favorite</Link>
          </li>
          <li className={styles.navElem}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
