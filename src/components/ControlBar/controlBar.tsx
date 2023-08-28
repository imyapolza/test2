import React from "react";
import { controlBarNames } from "../../constants/controlBar";
import vertivalLineSrc from "../../../public/images/vertical-line.svg";
import lightPlusSrc from "../../../public/images/light-plus.svg";
import clsx from "clsx";

import * as styles from "./controlBar.module.scss";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { setActiveMenuBar } from "../../core/redux/slices/documentSlice";

export default function ControlBar() {
  const dispatch = useAppDispatch();

  const { activeMenu } = useAppSelector((state) => state.document);

  const isNotes = activeMenu === 0;
  const isConsultation = activeMenu === 1;
  const isVideo = activeMenu === 2;
  const isEvents = activeMenu === 3;

  return (
    <ul className={styles.list}>
      <div className={styles.left}>
        {controlBarNames.map((name, index) => (
          <>
            <li
              className={clsx(styles.item, {
                [styles.active]: index === activeMenu,
              })}
              key={index}
              onClick={() => dispatch(setActiveMenuBar(index))}
            >
              {name}
            </li>
            {index <= 3 && <img src={vertivalLineSrc} alt="vertical line" />}
          </>
        ))}
      </div>
      <button className={styles.right}>
        {isNotes && <span className={styles.create}>Новая заметка</span>}
        {isConsultation && <span className={styles.create}>Записать</span>}
        {(isVideo || isEvents) && (
          <span className={styles.create}>Рекомендовать</span>
        )}

        <img src={lightPlusSrc} alt="plus icon" />
      </button>
    </ul>
  );
}
