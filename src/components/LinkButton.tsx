import styles from "./LinkButton.module.scss";

import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord, BsTwitch } from "react-icons/bs";

export default function LinkButton({
  type,
}: {
  type: string;
}) {
  let iconElement;
  let name;
  let color;

  switch (type) {
    case "youtube":
      iconElement = <AiFillYoutube size={25} className={styles.icon} />;
      name = 'YouTube'
      color = '#F00'
      break;

    case "twitter":
      iconElement = <AiOutlineTwitter size={25} className={styles.icon} />;
      name = 'Twitter'
      color = '#1DA1F2'
      break;

    case "twitch":
      iconElement = <BsTwitch size={25} className={styles.icon} />;
      name = 'Twitch'
      color = '#6441A5'
      break;

    case "discord":
      iconElement = <BsDiscord size={25} className={styles.icon} />;
      name = 'Discord'
      color = '#5865F2'
      break;
  }

  return (
    <button className={styles.wrapper} style={{ backgroundColor: color }}>
      {iconElement}
      <span>{name}</span>
    </button>
  );
}
