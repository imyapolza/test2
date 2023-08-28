import React from "react";
import * as styles from "./user.module.scss";

import tgSrcIcon from "../../../public/images/telegram.svg";
import warningSrcIcon from "../../../public/images/warning.svg";
import activeUserLineIcon from "../../../public/images/active-user-line.svg";
import Checkbox from "../Checkbox/checkbox";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { setCheckedUsers } from "../../core/redux/slices/userSlice";

interface Arguments {
  avatarSrc: string;
  firstAndLastName: string;
  id: number;
  getActiveCardId: (id: number) => void;
  tg?: boolean;
  warning?: boolean;
}

export default function User({
  avatarSrc,
  firstAndLastName,
  id,
  getActiveCardId,
  tg = false,
  warning = false,
}: Arguments) {
  const dispatch = useAppDispatch();

  const { checkedUsers, selectionMode } = useAppSelector((state) => state.user);

  const isChecked = checkedUsers.includes(id);

  return (
    <div className={styles.wrapper} onClick={() => getActiveCardId(id)}>
      {isChecked && (
        <img
          className={styles.active}
          src={activeUserLineIcon}
          alt="active user line icon"
        />
      )}
      <div className={styles.main}>
        {selectionMode && (
          <Checkbox
            isChecked={isChecked}
            onChange={() => dispatch(setCheckedUsers(id))}
          />
        )}

        <img className={styles.avatar} src={avatarSrc} alt="user avatar" />
        <span className={styles.name}>{firstAndLastName}</span>
      </div>
      {tg && (
        <img className={styles.rightIcon} src={tgSrcIcon} alt="telegram icon" />
      )}
      {warning && (
        <img
          className={styles.rightIcon}
          src={warningSrcIcon}
          alt="warning icon"
        />
      )}
    </div>
  );
}
