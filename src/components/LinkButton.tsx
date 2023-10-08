import styles from "./LinkButton.module.scss";

import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord, BsTwitch } from "react-icons/bs";

export default function LinkButton({
  children,
  icon,
  color,
}: {
  children: React.ReactNode;
  icon: string;
  color: string;
}) {
  let iconElement;

  switch (icon) {
    case "youtube":
      iconElement = <AiFillYoutube size={25} className={styles.icon} />;
      break;

    case "twitter":
      iconElement = <AiOutlineTwitter size={25} className={styles.icon} />;
      break;

    case "twitch":
      iconElement = <BsTwitch size={25} className={styles.icon} />;
      break;

    case "discord":
      iconElement = <BsDiscord size={25} className={styles.icon} />;
      break;
  }

  return (
    <a href="/" className={styles.wrapper} style={{ backgroundColor: color }}>
      {iconElement}
      <span>{children}</span>
    </a>
  );
}
