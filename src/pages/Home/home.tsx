import React, { useEffect } from "react";
import SearchPanel from "../../components/SearchPanel/searchPanel";
import InfoPanel from "../../components/InfoPanel/infoPanel";
import User from "../../components/User/user";

import useSearchCardsByInput from "./hooks/useSearchCardsByInput";
import UserInfo from "../../components/UserInfo/userInfo";

import * as styles from "./home.module.scss";
import { useAppDispatch } from "../../core/redux/hooks";
import { activeUser, setCards } from "../../core/redux/slices/userSlice";
import ControlBar from "../../components/ControlBar/controlBar";
import MainDocument from "../../components/MainDocument/mainDocument";

export default function Home() {
  const { textInput, handleChangeInput, cards } = useSearchCardsByInput();

  const dispatch = useAppDispatch();

  const isEmpty = textInput.length > 0 && cards.length === 0;

  const getActiveCardId = (id: number) => {
    dispatch(activeUser(id));
  };

  useEffect(() => {
    dispatch(setCards(cards));
  }, []);

  return (
    <div className={styles.wrapper}>
      <aside>
        <SearchPanel handleChangeInput={handleChangeInput} />
        <InfoPanel count={cards.length} />
        <div className={styles.users}>
          {cards.map((item, index) => (
            <User
              key={index}
              id={index}
              avatarSrc={item.avatarSrc}
              firstAndLastName={item.firstAndLastName}
              getActiveCardId={getActiveCardId}
              tg={index === 0}
              warning={index === 2}
            />
          ))}
          {isEmpty && (
            <span className={styles.empty}>Пользователи не найдены</span>
          )}
        </div>
      </aside>
      <div className={styles.right}>
        <UserInfo />
        <ControlBar />
        <MainDocument />
      </div>
    </div>
  );
}
