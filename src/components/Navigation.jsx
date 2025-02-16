import styles from "../css/Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.nav_container}>
      <nav>
        <img src="Frame.svg" alt="" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
