import Header from "../components/Header";
import styles from "./HomePage.module.scss";
import ExampleProfile from "../components/ExampleProfile";

import { AiFillCaretDown } from "react-icons/ai";

import wave1 from "../assets/wave1.svg";
import LinkButton from "../components/LinkButton";

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
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
            <button className="button">Let's go!</button>
          </div>
        </div>
        <div>
          <ExampleProfile />
        </div>
      </div>
      <img src={wave1} className={styles.wave1} alt="Wave 1" />
      <div className={styles.blueArea}>
        <span className={styles.blueIntro}>All your links in one place. Includes everything.</span>
        <span className={styles.blueIntroLink}>https://linkship.ru/your_cool_username</span>
        <AiFillCaretDown size="50" color="white" />
        <div className={styles.links}>
          <LinkButton type="youtube" />
          <LinkButton type="twitter" />
          <LinkButton type="twitch" />
          <LinkButton type="discord" />
        </div>
        <button><u className={styles.linksMore}>...and more</u></button>
      </div>
    </main>
  );
}
