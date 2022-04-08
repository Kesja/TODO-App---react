import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <a className={styles.icon} href="/">
          <span className={' fa fa-tasks'} />
        </a>
        <ul className={styles.navList}>
          <li className={styles.navElem}>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink> 
          </li>
          <li className={styles.navElem}>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>  
          </li>
          <li className={styles.navElem}>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>   
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
