import React from "react";
import detailedSrcIcon from "../../../public/images/detailed.svg";
import * as styles from "./userInfo.module.scss";
import { useAppSelector } from "../../core/redux/hooks";

export default function UserInfo() {
  const { firstAndLastName, avatarSrc } = useAppSelector(
    (state) => state.user.activeCard
  );

  return (
    <div className={styles.wrapper}>
      <img src={avatarSrc} alt="user avatar" />
      <div className={styles.info}>
        <h3 className={styles.fio}>{firstAndLastName}</h3>
        <span className={styles.age}>30 лет, муж</span>
      </div>
      <button className={styles.button}>
        <img src={detailedSrcIcon} alt="detailed icon" />
      </button>
    </div>
  );
}
