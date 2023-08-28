import React, { ChangeEvent } from "react";
import * as styles from "./checkbox.module.scss";

interface Arguments {
  label?: string;
  onChange?: (e: ChangeEvent) => void;
  isChecked?: boolean;
}

export default function Checkbox({
  label,
  onChange,
  isChecked = false,
}: Arguments) {
  return (
    <label className={styles.wrapper}>
      <input
        className={styles.input}
        type="checkbox"
        name="checkbox"
        onChange={onChange}
        checked={isChecked}
      />
      <div className={styles.display}></div>
      <div className={styles.label}>{label}</div>
    </label>
  );
}
