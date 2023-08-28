import React, { ChangeEvent } from "react";
import * as styles from "./infoPanel.module.scss";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import {
  setAllUsersChecked,
  setCheckedUsers,
  setMode,
} from "../../core/redux/slices/userSlice";
import clsx from "clsx";
import Checkbox from "../Checkbox/checkbox";

interface Arguments {
  count: number;
}

export default function InfoPanel({ count }: Arguments) {
  const dispatch = useAppDispatch();

  const { selectionMode, checkedUsers } = useAppSelector((state) => state.user);

  const onChangeCheckbox = (e: ChangeEvent<Element>) => {
    const target = e.target as HTMLInputElement;

    if (target.value) {
      dispatch(setAllUsersChecked(true));
      dispatch(setCheckedUsers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
    }
  };

  const onCanelSelectionMode = () => {
    dispatch(setMode(!selectionMode));
    dispatch(setAllUsersChecked(false));
    dispatch(setCheckedUsers([]));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.all}>
        {selectionMode && (
          <Checkbox
            label="Все"
            onChange={onChangeCheckbox}
            isChecked={checkedUsers.length === 12}
          />
        )}
        <span
          className={clsx(styles.count, {
            [styles.countActive]: selectionMode,
          })}
        >
          {selectionMode ? <>{checkedUsers.length}</> : <>{count}</>}
        </span>
      </div>
      <div>
        {selectionMode && (
          <button className={clsx(styles.button, styles.actions)}>
            Действия
          </button>
        )}
        {!selectionMode && (
          <button
            className={styles.button}
            onClick={() => dispatch(setMode(!selectionMode))}
          >
            Выбрать
          </button>
        )}
        {selectionMode && (
          <button className={styles.button} onClick={onCanelSelectionMode}>
            Отменить
          </button>
        )}
      </div>
    </div>
  );
}
