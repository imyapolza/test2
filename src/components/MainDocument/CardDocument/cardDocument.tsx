import React from "react";
import * as styles from "./cardDocument.module.scss";
import clsx from "clsx";
import Type from "./Type/type";

interface Arguments {
  isNotConfirmed?: boolean;
  name: string;
  bottomText: string;
  srcIcon: string;
  rightBottomText?: string | null;
  type?: string;
  typeSrcIcon?: string;
  date?: string;
  dateSrcIcon?: string;
  time?: string;
  timeSrcIcon?: string;
}

export default function CardDocument({
  isNotConfirmed = false,
  name,
  bottomText,
  srcIcon,
  rightBottomText = null,
  type,
  typeSrcIcon,
  date,
  dateSrcIcon,
  time,
  timeSrcIcon,
}: Arguments) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={srcIcon} alt="icon" />
      <div className={styles.head}>
        <h4 className={styles.name}>{name}</h4>
        {!(type && typeSrcIcon) && (
          <span className={styles.bottomText}>{bottomText}</span>
        )}

        <div className={styles.types}>
          {type && typeSrcIcon && (
            <Type typeSrcIcon={typeSrcIcon} type={type} />
          )}
          {date && dateSrcIcon && (
            <Type typeSrcIcon={dateSrcIcon} type={date} />
          )}
          {time && timeSrcIcon && (
            <Type typeSrcIcon={timeSrcIcon} type={time} />
          )}
        </div>
      </div>
      {isNotConfirmed && (
        <div className={clsx(styles.rightBottomText, styles.colorRed)}>
          Не подтверждено
        </div>
      )}
      {rightBottomText && (
        <div className={clsx(styles.rightBottomText, styles.colorGrey)}>
          {rightBottomText}
        </div>
      )}
    </div>
  );
}
