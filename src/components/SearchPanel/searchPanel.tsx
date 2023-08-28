import React, { ChangeEvent } from "react";
import * as styles from "./searchPanel.module.scss";
import searchSrcIcon from "../../../public/images/loupe.svg";
import filterSrcIcon from "../../../public/images/filter.svg";
import plusSrcIcon from "../../../public/images/plus.svg";

interface Arguments {
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchPanel({ handleChangeInput }: Arguments) {
  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.button}>
          <img src={searchSrcIcon} alt="search button" />
        </button>

        <input
          className={styles.input}
          type="text"
          onChange={handleChangeInput}
        />

        <div>
          <button className={styles.button}>
            <img src={filterSrcIcon} alt="filter button" />
          </button>
          <button className={styles.button}>
            <img src={plusSrcIcon} alt="plus button" />
          </button>
        </div>
      </div>
    </>
  );
}
