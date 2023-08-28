import React from "react";
import * as styles from "./note.module.scss";

import detailedSrcIcon from "../../../../public/images/detailed.svg";

interface Arguments {
  date: string;
  text: string;
  imageSrc?: null | string;
}

export default function Note({ date, text, imageSrc = null }: Arguments) {
  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.date}>{date}</span>
        <p className={styles.text}>{text}</p>
        <div>{imageSrc && <img src={imageSrc} alt="note image" />}</div>
      </div>

      <button>
        <img src={detailedSrcIcon} alt="detailed icon" />
      </button>
    </div>
  );
}
