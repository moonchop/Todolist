import React, { useState, useEffect } from "react";
import "./head.css";

function Head({ leftList }: any) {
  const [clock, setClock] = useState("");
  const [fullDate, setFullDate] = useState("");

  useEffect(() => {
    setInterval(time, 1000);
    const newDay = new Date();
    const year = newDay.getFullYear();
    const month = newDay.getMonth();
    const days = newDay.getDay();
    setFullDate(`${year}년 ${month + 1}월 ${days}일`);
  }, []);

  const time = () => {
    const newDay = new Date();
    const hours = String(newDay.getHours()).padStart(2, "0");
    const minutes = String(newDay.getMinutes()).padStart(2, "0");
    const seconds = String(newDay.getSeconds()).padStart(2, "0");
    setClock(`${hours}:${minutes}:${seconds}`);
  };
  return (
    <div className="head">
      <b className="day">{fullDate}</b>
      <h1> {clock} </h1>
      <div className="tasks-left">할 일 {leftList}개 남음</div>
    </div>
  );
}

export default Head;
