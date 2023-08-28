import React from "react";
import * as styles from "./type.module.scss";

interface Arguments {
  typeSrcIcon: string;
  type: string;
}

export default function Type({ typeSrcIcon, type }: Arguments) {
  return (
    <div className={styles.typeWrapper}>
      <img className={styles.typeIcon} src={typeSrcIcon} alt="type icon" />
      <div className={styles.type}>{type}</div>
    </div>
  );
}
