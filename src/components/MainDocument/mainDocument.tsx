import React from "react";
import * as styles from "./mainDocument.module.scss";
import Note from "./Note/note";
import { notes } from "../../constants/mainDocument";
import { useAppSelector } from "../../core/redux/hooks";

import cameraSrcIcon from "../../../public/images/consultations/camera.svg";
import dialogSrcIcon from "../../../public/images/consultations/dialog.svg";

import previewVideoSrc_1 from "../../../public/images/videos/1.png";
import previewVideoSrc_2 from "../../../public/images/videos/2.png";
import previewVideoSrc_3 from "../../../public/images/videos/3.png";

import previewEventSrc from "../../../public/images/events/1.png";

import cameraEventSrc from "../../../public/images/events/camera.svg";
import dateEventSrc from "../../../public/images/events/calendar.svg";
import timeEventSrc from "../../../public/images/events/clock.svg";

import CardDocument from "./CardDocument/cardDocument";

export default function MainDocument() {
  const { activeMenu } = useAppSelector((state) => state.document);

  const isNotes = activeMenu === 0;
  const isConsultation = activeMenu === 1;
  const isVideo = activeMenu === 2;
  const isEvent = activeMenu === 3;

  return (
    <main className={styles.wrapper}>
      {isNotes && (
        <>
          {notes.map((item, index) => (
            <Note
              key={index}
              date={item.date}
              text={item.text}
              imageSrc={item.imageSrc}
            />
          ))}
        </>
      )}
      {isConsultation && (
        <>
          <CardDocument
            name={"Online консультация"}
            bottomText={"15.01.2019, 12:30-13:00"}
            srcIcon={cameraSrcIcon}
          />
          <CardDocument
            name={"Online консультация"}
            bottomText={"15.01.2019, 12:30-13:00"}
            srcIcon={cameraSrcIcon}
          />
          <CardDocument
            name={"Личный приём"}
            bottomText={"15.01.2019, 12:30-13:00"}
            isNotConfirmed
            srcIcon={dialogSrcIcon}
          />
        </>
      )}
      {isVideo && (
        <>
          <CardDocument
            name={"Крабик, ходьба в бок в приседе с двумя резинками Кра…"}
            bottomText={"Астахова Е.В."}
            srcIcon={previewVideoSrc_1}
          />
          <CardDocument
            name={"Разминка для локтевого сустава"}
            bottomText={"Астахова Е.В."}
            srcIcon={previewVideoSrc_2}
            rightBottomText={"15.01.2019 - 22.01.2019"}
          />
          <CardDocument
            name={"Разминка для локтевого суставаРазминка для локтевого.."}
            bottomText={"Астахова Е.В."}
            srcIcon={previewVideoSrc_3}
            rightBottomText={"15.01.2019 - 22.01.2019"}
          />
        </>
      )}
      {isEvent && (
        <>
          {[1, 2, 3, 4].map(() => (
            <>
              <CardDocument
                name={"Тяга резинки в шаге со сгибанием локтя под 90 градусов "}
                bottomText={"Астахова Е.В."}
                srcIcon={previewEventSrc}
                type="Вебинар"
                typeSrcIcon={cameraEventSrc}
                date="9 марта 2021"
                dateSrcIcon={dateEventSrc}
                time="17:00"
                timeSrcIcon={timeEventSrc}
              />
            </>
          ))}
        </>
      )}
    </main>
  );
}
