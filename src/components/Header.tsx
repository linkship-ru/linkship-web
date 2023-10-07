import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <span className={styles.logo}>Linkship</span>
      <div className={styles.right}>
        <button>Register</button>
        <button>Login</button>
      </div>
    </header>
  );
}
