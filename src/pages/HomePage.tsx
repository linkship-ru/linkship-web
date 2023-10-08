import Header from "../components/Header";
import styles from "./HomePage.module.scss";
import ExampleProfile from "../components/ExampleProfile";

import wave1 from "../assets/wave1.svg";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className={styles.introductionWrapper}>
        <div className={styles.introduction}>
          <span>
            Your profile in the web.
            <br />
            Everywhere.
          </span>
          <div>
            <form action="">
              <input
                type="text"
                name="username"
                placeholder="linkship.ru/username"
              />
            </form>
            <button>Let's go!</button>
          </div>
        </div>
        <div>
          <ExampleProfile />
        </div>
      </div>
      <img src={wave1} className={styles.wave1} alt="Wave 1" />
    </main>
  );
}
