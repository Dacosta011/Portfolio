import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import ExpDetailStyles from "../styles/ExpDetail.module.scss";

function ExperienceDetail({ show, position, company, dates, details }) {
  return (
    <div
      className={ExpDetailStyles.detailContainer}
      style={{
        opacity: show ? "1" : "0",
        height: show ? "auto" : "0",
      }}
    >
      {show && (
        <>
          <p className={ExpDetailStyles.detailTitle}>
            {position} <span>@{company}</span>
          </p>
          <p className={ExpDetailStyles.detailDates}>
            {dates[0]} - {dates[1]}
          </p>
          <ul className={ExpDetailStyles.detailList}>
            {details.map((detail, index) => (
              <li key={index}>
                <AiFillCaretRight />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ExperienceDetail;
